import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";

const BuyTool = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data?.order_quantity < data?.min_order_quantity) {
      toast("Please Increase Your Order Quantity");
      return;
    }
    if (data?.order_quantity > data?.avail_quantity) {
      toast("Please Decrease Your Order Quantity");
      return;
    }
  
      console.log("from data ", data);
      const url = `https://fathomless-plains-16450.herokuapp.com/orders`;
      fetch(url, {
        method: "post", //thakle update korbe na thakle add koreb put
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
          toast("Place order");
          reset();
        });
    
  };
  const { data: product, isLoading } = useQuery(["product", id], () =>
    fetch(`https://fathomless-plains-16450.herokuapp.com/tools/${id}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto my-5 pb-5">
      <div>
        <h2 className="py-3 text-success fs-1 pb-5  text-center fw-bold">
          Make A Order
        </h2>
        <div className=" d-flex justify-content-center">
          <div>
            <h3 className="fw-bold text-center my-5">
              Tools Name: {product.toolsname}
            </h3>
            <img
              src={product.img}
              className="img-fluid  shadow"
              style={{ height: "500px" }}
              alt=""
            />

            <h6 className="fw-bold text-center mb-5 py-2">
              Tools ID: {product._id}
            </h6>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-100 mx-auto my-4">
          <form
            className="flex w-100 flex-col mb-4 px-3 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="fw-bold fs-4">{user.displayName}</p>
            <small className="fw-bold fs-6">{user.email}</small><br />
            <label className="text-success mt-2">Email :</label> <br />
            <input
              placeholder="Name"
              value={user.email}
              className="border p-2 mb-2 w-100"
              {...register("email", { required: true })}
            />
            <div className="flex flex-col justify-content-start align-items-start ">
              <div className="flex justify-content-center align-items-center gap-2">
                <label className="text-success mt-2">Vendor name:</label><br />
                <input
                  placeholder="Vendor"
                  value={product.vendor}
                  className="border p-2 mb-2  w-100"
                  {...register("vendor", { required: true })}
                />
              </div>
              <div className="flex justify-content-center align-align-items-center gap-2">
                <label className="text-success mt-2">Product name:</label><br />
                <input
                  placeholder="Name"
                  value={product.toolsname}
                  className="border p-2 mb-2  w-100"
                  {...register("toolsname", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label className="text-success mt-2">Description:</label><br />
                <input
                  placeholder="Description"
                  value={product.description}
                  className="border p-2 mb-2  w-100"
                  {...register("description", { required: true })}
                />{" "}
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label className="text-success mt-2">Minimum Quantity:</label><br />
                <input
                  placeholder="minimum"
                  value={product.min_order_quantity}
                  className="border p-2 mb-2  w-100"
                  {...register("min_order_quantity", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label  className="text-success mt-2">Available Quantity:</label> <br/>
                <input
                  placeholder="Available"
                  value={product.avail_quantity}
                  className="border p-2 mb-2  w-100"
                  {...register("avail_quantity", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label  className="text-success mt-2">Price :</label> <br/>
                <input
                  placeholder="Price"
                  value={product.price}
                  className="border p-2 mb-2  w-100"
                  {...register("price", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label  className="text-success mt-2">photoURL :</label> <br/>
                <input
                  placeholder="Photo Url"
                  value={product.img}
                  className="border p-2 mb-2  w-100"
                  {...register("img", { required: true })}
                />
              </div>
              <div className="flex justify-content-center align-items-center gap-2 ">
                <label  className="text-success mt-2">Material :</label> <br/>
                <input
                  placeholder="Material"
                  value={product.material}
                  className="border p-2 mb-2  w-100"
                  {...register("material", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label  className="text-success mt-2">Address :</label> <br/>
                <input
                  placeholder="address"
                  type="text"
                  className="border p-2 mb-2  w-100"
                  {...register("address", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center  gap-2">
                <label  className="text-success mt-2">Phone :</label> <br/>
                <input
                  placeholder="Phone number"
                  type="number"
                  className="border p-2 mb-2  w-100"
                  {...register("phone", { required: true })}
                />
              </div>

              <div className="flex justify-content-center align-items-center gap-2 ">
                <label  className="text-success mt-2">Order Quantity :</label> <br/>
                <input
                  placeholder="Order Quantity"
                  type="number"
                  className="border p-2 mb-2  w-100"
                  {...register("order_quantity")}
                />
              </div>
            </div>

            <input
              className="border p-2 mb-2 btn btn-warning w-100"
              type="submit"
              value="Place order"
            />
          </form>

          {/* <h6>{id}</h6>
    
      <h6>{tool.min_order_quantity}</h6>
      <h4>{user?.email}</h4>
      <h4>{user?.uid}</h4>
      <h4>{user?.displayName}</h4>
     
      {console.log(user)} */}
        </div>
      </div>
    </div>
  );
};

export default BuyTool;
