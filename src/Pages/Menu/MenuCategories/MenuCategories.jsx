import SharedCover from "../../Shared/SharedCover/SharedCover";
import FoodItems from "./../../../Component/FoodItems/FoodItems";
import SharedButton from "./../../Shared/SharedButton/SharedButton";

const MenuCategories = ({ heading, items, image }) => {
  return (
    <div className="my-12">
      {image && <SharedCover heading={heading} image={image}></SharedCover>}
      <div className="w-3/4 mx-auto">
        <FoodItems items={items}></FoodItems>
        <SharedButton text={"Order Your favorite food"}></SharedButton>
      </div>
    </div>
  );
};

export default MenuCategories;
