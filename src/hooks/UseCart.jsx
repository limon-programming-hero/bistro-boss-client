import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
  const { user } = useContext(authContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const fetching = await fetch(
        `http://localhost:3000/carts?email=${user?.email}`
      );
      console.log(user?.email);
      return fetching.json();
    },
  });
  return [cart, refetch];
};

export default UseCart;
