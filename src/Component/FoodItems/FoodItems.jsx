import FoodItem from "./FoodItem";
const FoodItems = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 mx-2 my-4 gap-4 ">
      {items?.map((data) => (
        <FoodItem key={data?._id} item={data}></FoodItem>
      ))}
    </div>
  );
};

export default FoodItems;
