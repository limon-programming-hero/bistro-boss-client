import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseMenu = () => {
  const { data: menu = [], isLoading: loading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/menu");
      return response.data;
    },
  });
  return [menu, loading];
};

export default UseMenu;
