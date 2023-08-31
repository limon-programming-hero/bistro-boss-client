import { useContext } from "react";
import SharedButton from "../../Pages/Shared/SharedButton/SharedButton";
import { authContext } from "./../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const FoodCard = ({ item }) => {
  const { name, recipe, image, _id, price } = item;
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleAddCart = () => {
    if (!user) navigate("/login");
    const addItem = {
      name,
      image,
      price,
      email: user.email,
      menuItemId: _id,
    };
    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((data) => {
        data.acknowledged &&
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Added!",
            showConfirmButton: false,
            timer: 900,
          });
      });
    console.log(addItem);
  };
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <div className="card-body items-center bg-base-100">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <p>
            <SharedButton
              clickHandler={handleAddCart}
              className="w-full h-full"
              text={"add to card"}
            ></SharedButton>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
