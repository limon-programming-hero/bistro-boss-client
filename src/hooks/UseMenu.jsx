import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseMenu = () => {
  const {
    data: menu = [],
    isLoading: isMenuLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/menu");
      return response.data;
    },
  });
  return [menu, isMenuLoading, refetch];
};

export default UseMenu;
