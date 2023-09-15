import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseReviews = () => {
  const { data: reviews = [], isLoading: loading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/reviews");
      console.log(res);
      return res.data;
    },
  });
  return [reviews, loading];
};

export default UseReviews;
