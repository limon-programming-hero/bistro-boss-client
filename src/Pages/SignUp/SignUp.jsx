import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { SignUpWithEmail, addNameAndPhoto } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const HandleSignUp = (data) => {
    console.log(data);
    SignUpWithEmail(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        addNameAndPhoto(result.user, data.name, data.photoURL)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign Up Successful!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((errors) => {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: { errors },
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content  flex-col justify-evenly lg:flex-row">
        <div className="text-center w-full lg:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-2/3 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(HandleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">PhotoURL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 14,
                  pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">
                  Password must have one uppercase, one lowercase, one digit,
                  one special case with maximum 8 character
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="input input-bordered btn btn-outline btn-neutral"
              />
            </div>
            <span className="divider"></span>
          </form>
          <button className="btn mx-auto btn-circle btn-outline">
            <FaGoogle />
          </button>
          <p className="text-center my-4">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="cursor-pointer text-primary">
                {" "}
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
