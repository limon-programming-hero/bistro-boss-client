import { useEffect, useState } from "react";

const UseReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        SetLoading(false);
      });
  }, []);
  return [reviews, loading];
};

export default UseReviews;
