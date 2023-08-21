import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeSlide from "../HomeSlide/HomeSlide";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <SharedTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"order online"}
      ></SharedTitle>
      <HomeSlide></HomeSlide>
    </div>
  );
};

export default Home;
