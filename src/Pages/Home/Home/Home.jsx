import FoodCard from "../../../Component/FoodCard/FoodCard";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeContact from "../HomeContact/HomeContact";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeMenu from "../HomeMenu/HomeMenu";
import HomeSlide from "../HomeSlide/HomeSlide";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeSlide></HomeSlide>
      <HomeIntro></HomeIntro>
      <HomeMenu></HomeMenu>
      <HomeContact></HomeContact>
      <FoodCard></FoodCard>
    </div>
  );
};

export default Home;
