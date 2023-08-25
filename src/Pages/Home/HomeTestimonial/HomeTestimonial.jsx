import { useEffect, useState } from "react";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import HomeTestimonialSlide from "./HomeTestimonialSlide";
const HomeTestimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-3/4 mx-auto my-20">
      <SharedTitle
        subHeading={"What Our Client Says"}
        heading="Testimonial"
      ></SharedTitle>

      <HomeTestimonialSlide reviews={reviews}></HomeTestimonialSlide>
    </div>
  );
};

export default HomeTestimonial;
