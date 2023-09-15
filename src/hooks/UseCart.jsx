import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseCart = () => {
  const { user } = useContext(authContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/carts?email=${user?.email}`
      );
      return response.data;
    },
  });
  return [cart, refetch];
};

export default UseCart;
