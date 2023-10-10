import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
const imgToken = import.meta.env.VITE_image_upload_token;

const AdminAddItem = () => {
  const [axiosSecure] = UseAxiosSecure();
  const [priceError, setPriceError] = useState("");
  const imgUrl = `https://api.imgbb.com/1/upload?key=${imgToken}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, recipe, price, image, category } = data;
    const imageFile = image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const imageData = await UploadImage(formData);

    const newItem = {
      name,
      price: parseFloat(price),
      recipe,
      category,
      image: imageData?.data?.display_url,
    };

    if (!newItem.price) {
      setPriceError("please provide a numeric value!");
    } else {
      setPriceError("");
      axiosSecure.post("/menu", newItem).then((data) => {
        if (data?.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Added successfully!",
            timer: 1500,
          });
        }
      });
    }
    console.log(newItem);
  };
  //   uploading image to imgbb
  const UploadImage = async (formData) => {
    const res = await axios.post(imgUrl, formData);
    return res.data;
  };
  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <SharedTitle
        subHeading={"What's New?"}
        heading={"Add an Item"}
      ></SharedTitle>
      <div className="flex flex-col bg-base-100 rounded-md md:px-10 w-5/6 mx-auto mb-10">
        <form className="w-5/6 md:w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control px-2 md:px-0 w-full py-10 mb-2">
            <label className="label">
              <span className="label-text">*Item Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control px-2 md:px-0 flex flex-col md:flex-row ">
            <div className="my-2 mr-3">
              <label className="label">
                <span className="label-text">*Select Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
                defaultValue={"select Category"}
              >
                <option disabled>select Category</option>
                <option value={"drinks"}>Drinks</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"salad"}>Salad</option>
                <option value={"soup"}>Soup</option>
              </select>
              {errors.category && (
                <p className="text-red-600">{errors.category?.message}</p>
              )}
            </div>
            <div className="my-2 md:ml-3">
              <label className="label">
                <span className="label-text">*Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
              />
              {priceError && (
                <p className="text-red-600 my-1 md:ml-2">{priceError}</p>
              )}
              {errors.price && (
                <p className="text-red-600">{errors.price?.message}</p>
              )}
            </div>
          </div>
          <div className="form-control px-2 md:px-0 my-2">
            <label className="label">
              <span className="label-text">*Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <p className="text-red-600">{errors.recipe?.message}</p>
            )}
          </div>
          <div className="form-control px-2 md:px-0 w-full my-2">
            <label className="label">
              <span className="label-text">Pick an Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-sm"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
          </div>
          <input
            className="w-20 btn btn-outline btn-ghost my-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminAddItem;
