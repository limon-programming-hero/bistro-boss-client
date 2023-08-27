import SharedButton from "../../Pages/Shared/SharedButton/SharedButton";
const FoodCard = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <div className="card-body items-center bg-base-100">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <SharedButton text={"add to card"}></SharedButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
