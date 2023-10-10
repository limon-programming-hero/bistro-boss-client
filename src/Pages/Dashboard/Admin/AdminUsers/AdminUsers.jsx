import { FaTrash } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import UseUsers from "../../../../hooks/UseUsers";
import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AdminUsers = () => {
  const [users, refetch] = UseUsers();
  console.log(users);
  const [axiosSecure] = UseAxiosSecure();

  const handleMakeAdmin = async (user) => {
    Swal.fire({
      title: "Are you sure to make admin?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user._id);
        axiosSecure.patch(`/users/admin/${user?._id}`).then((data) => {
          console.log(data);
          refetch();
          data.data.modifiedCount &&
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Congratulations! ${user.name} is also an admin`,
              showConfirmButton: false,
              timer: 1500,
            });
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete User!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        axiosSecure.delete(`/users/admin/${id}`).then((data) => {
          console.log(data);
          refetch();
          data.data.deletedCount &&
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Deleted!",
              showConfirmButton: false,
              timer: 1500,
            });
        });
      }
    });
  };
  return (
    <div className="bg-base-200 w-full flex flex-col mx-auto items-center rounded-md h-full">
      <SharedTitle
        subHeading={"How many?"}
        heading={"Manage All User"}
      ></SharedTitle>
      <section className="flex flex-col bg-base-100 rounded-md p-3 md:p-10 mb-10">
        <div className="flex justify-start text-2xl mt-10 font-semibold">
          <h3>Total Users : {users.length}</h3>
        </div>
        <div className=" mx-auto">
          <table className="table my-5 p-3 lg:p-0">
            {/* head */}
            <thead className="bg-[#d39e4f] rounded-md w-fit">
              <tr className="text-lg uppercase py-2">
                <th>X</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr className="overflow-x-hidden" key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role === "Admin" ? (
                      <p className="text-success">Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-yellow-600 text-white btn-ghost"
                      >
                        <MdPeopleAlt></MdPeopleAlt>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                      className="btn bg-red-700 text-white btn-ghost"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;
