import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const UseUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/users`);
      return res.data;
    },
  });
  return [users, refetch];
};

export default UseUsers;
