import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const SetUserToDb = async () => {
  const { user, loading } = UseAuth();
  if (loading) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Signing.....!",
      showConfirmButton: false,
      timer: 500,
    });
  }
  if (!loading && user) {
    const userDetails = { name: user?.displayName, email: user?.email };
    await UseAxiosSecure.post("/users", userDetails).then((data) =>
      console.log(data.data)
    );
  }
};

export default SetUserToDb;
