import { useQuery } from "@tanstack/react-query";
const UseUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const fetching = await fetch(`http://localhost:3000/users`);
      return fetching.json();
    },
  });
  return [users, refetch];
};

export default UseUsers;
