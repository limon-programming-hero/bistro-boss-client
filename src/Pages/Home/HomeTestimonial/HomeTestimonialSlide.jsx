import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const HomeTestimonialSlide = ({ reviews }) => {
  // console.log(reviews);
  return (
    <div className="mt-10">
      <Swiper
        key={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review) => {
          <div key={review._id}>
            <SwiperSlide>
              <div className="items-center flex flex-col w-3/4 mx-auto gap-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <p>{review?.details}</p>
                <h3 className="text-yellow-600 text-xl font-semibold">
                  {review?.name}
                </h3>
              </div>
            </SwiperSlide>
            ;
          </div>;
        })}
      </Swiper>
    </div>
  );
};

export default HomeTestimonialSlide;
