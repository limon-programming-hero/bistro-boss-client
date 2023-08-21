import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const HomeSlide = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img1" />
        </SwiperSlide>
        <br />
      </Swiper>
    </div>
  );
};

export default HomeSlide;
