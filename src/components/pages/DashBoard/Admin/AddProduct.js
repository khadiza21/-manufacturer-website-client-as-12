import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://fathomless-plains-16450.herokuapp.com/tools`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((addProduct) => {
        console.log(addProduct, user.email);

        toast("Product Added Successfully...");
      });

    reset();
  };

  // name,img,size,aterial,vendor,type,availity,description,min_order_quantity,avail_quantity,price

  return (
    <div className="container mx-auto my-5 pb-5">
      {console.log(user)}
      <h3 className="py-3 text-success fs-1 pb-5  text-center fw-bold">
        Add A New Gardening Tools Items
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-75 mx-auto"
      >
        <input
          required
          className="mb-3 py-2"
          placeholder=" Name"
          {...register("name", { required: true, maxLength: 200 })}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Image Url"
          {...register("img")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Size"
          {...register("size")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Material"
          {...register("material")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Vendor"
          {...register("vendor")}
        />
        <input
          required
          className="mb-3 py-2 "
          placeholder=" Type"
          {...register("type")}
        />
        <input
          required
          className="mb-3 py-2 "
          placeholder=" Availity"
          {...register("availity")}
        />
        <textarea
          required
          className="mb-3 py-2"
          placeholder=" Description"
          {...register("description")}
        />
        <input
          required
          className="mb-3 py-2 mt-1"
          placeholder=" Min Order Quantity"
          {...register("min_order_quantity")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Avail Quantity"
          {...register("avail_quantity")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Price"
          {...register("price")}
        />

        <input
          className="btn btn-success mb-3 py-2 fw-bold"
          type="submit"
          value="Add New Tool Item"
        />
      </form>
    </div>
  );
};

export default AddProduct;
