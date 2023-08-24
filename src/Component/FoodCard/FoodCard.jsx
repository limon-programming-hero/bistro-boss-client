import SharedButton from "../../Pages/Shared/SharedButton/SharedButton";
import img from "../../assets/home/chef-service.jpg";
const FoodCard = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Food" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <SharedButton text={"add to card"}></SharedButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
