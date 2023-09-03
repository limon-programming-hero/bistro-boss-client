import SharedTitle from "./../../Shared/SharedTitle/SharedTitle";
import UserCart from "./../../../hooks/UserCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const DashboardCart = () => {
  const [cart, refetch] = UserCart();
  console.log(cart);
  const totalPrice = cart.reduce(
    (total, singleCart) => singleCart.price + total,
    0
  );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            data.deletedCount === 1 &&
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item deleted successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            console.log(data);
            refetch();
          });
      }
    });
  };

  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <SharedTitle
        subHeading={"My Cart"}
        heading={"wanna add more?"}
      ></SharedTitle>
      <section className="flex flex-col bg-base-100 rounded-md md:p-10">
        <div className="flex justify-around text-2xl mt-10 font-semibold">
          <h3>Total Item : {cart.length}</h3>
          <h3>Total Price : $ {totalPrice}</h3>
        </div>
        <div>
          <table className="table my-5 p-3 lg:p-0">
            {/* head */}
            <thead className="bg-[#d39e4f] rounded-md">
              <tr className="text-lg uppercase py-2">
                <th>X</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart?.map((item, index) => (
                <>
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-square rounded-md w-6 h-6 md:w-12 md:h-12">
                            <img src={item.image} alt="item" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                        className="btn bg-red-700 text-white btn-ghost"
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DashboardCart;
