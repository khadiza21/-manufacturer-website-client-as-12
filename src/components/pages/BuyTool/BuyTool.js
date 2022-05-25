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

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/orders`;
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
      });
  };
  const { data: product, isLoading } = useQuery("product", () =>
    fetch(`http://localhost:5000/tools/${id}`).then((res) => res.json())
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
              Tools Name: {product.name}
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
        {console.log(user)}

        <div className="w-50 mx-auto my-4">
          <form
            className="flex flex-col mb-4 px-3 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2>Purchase Tool</h2>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <div>
              <img
                style={{ height: "300px ", width: "100%" }}
                src={product.img}
                alt=""
              />
            </div>

            <input
              placeholder="Name"
              value={user.email}
              className="border p-2 mb-2 "
              {...register("email", { required: true })}
            />
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-center items-center gap-2">
                <label>Product name:</label>
                <input
                  placeholder="Name"
                  value={product.name}
                  className="border p-2 mb-2 "
                  {...register("name", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Description:</label>
                <input
                  placeholder="Description"
                  value={product.description}
                  className="border p-2 mb-2 "
                  {...register("description", { required: true })}
                />{" "}
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Minimum Quantity:</label>
                <input
                  placeholder="minimum"
                  value={product.min_order_quantity}
                  className="border p-2 mb-2 "
                  {...register("min_order_quantity", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Available Quantity:</label>
                <input
                  placeholder="Available"
                  value={product.avail_quantity}
                  className="border p-2 mb-2 "
                  {...register("avail_quantity", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Price :</label>
                <input
                  placeholder="Price"
                  value={product.price}
                  className="border p-2 mb-2 "
                  {...register("price", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Price :</label>
                <input
                  placeholder="Price"
                  value={product.img}
                  className="border p-2 mb-2 "
                  {...register("img", { required: true })}
                />
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <label>Price :</label>
                <input
                  placeholder="Price"
                  value={product.material}
                  className="border p-2 mb-2 "
                  {...register("material", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Address :</label>
                <input
                  placeholder="address"
                  type="text"
                  className="border p-2 mb-2 "
                  {...register("address", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center  gap-2">
                <label>Phone :</label>
                <input
                  placeholder="Phone number"
                  type="number"
                  className="border p-2 mb-2 "
                  {...register("phone", { required: true })}
                />
              </div>

              <div className="flex justify-center items-center gap-2 ">
                <label>Order Quantity :</label>
                <input
                  placeholder="Order Quantity"
                  type="number"
                  className="border p-2 mb-2 "
                  {...register("order_quantity", {
                    min: `${product.minmum}`,
                    max: `${product.available}`,
                  })}
                />
              </div>
            </div>

            <input
              className="border p-2 mb-2 btn btn-warning"
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

          {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column w-75 mx-auto"
        >
          <input
            // readOnly
            value={user?.email}
            className="mb-3 py-2 ps-2"
            {...register("email")}
          />
          <input
            // readOnly
            value={user?.uid}
            className="mb-3 py-2 ps-2"
            {...register("uid")}
          />
          <input
            // readOnly
            value={user?.displayName}
            className="mb-3 py-2 ps-2"
            {...register("displayName")}
          />

          <input
            name="name"
            value={tool?.name}
            className="mb-3 py-2 ps-2"
            {...register("name")}
          />

          <input
            className="mb-3 py-2 ps-2"
            value={tool.img}
            {...register("img")}
          />

          <label htmlFor="Size" className="text-success">
            Size
          </label>
          <input
            className="mb-3 py-2"
            value={tool.size}
            {...register("size")}
          />

          <label htmlFor="Metarial" className="text-success">
            Material
          </label>
          <input
            className="mb-3 py-2"
            value={tool.material}
            {...register("material")}
          />

          <label htmlFor="Vendor" className="text-success">
            Vendor
          </label>
          <input
            className="mb-3 py-2 mt-1"
            value={tool.vendor}
            {...register("vendor")}
          />
          <label htmlFor="Type" className="text-success">
            Type
          </label>
          <input
            className="mb-3 py-2"
            value={tool.type}
            {...register("type")}
          />

          <label htmlFor="Availity" className="text-success">
            Availity
          </label>
          <input
            className="mb-3 py-2"
            value={tool.availity}
            {...register("availity")}
          />
          <label htmlFor="Description" className="text-success">
            Description
          </label>
          <textarea
            className="mb-3 py-2"
            value={tool?.description}
            {...register("description")}
          />
          <label htmlFor="Minimum Order Quantity" className="text-success">
            Minimum Order Quantity
          </label>
          <input
            className="mb-3 py-2"
            value={tool.min_order_quantity}
            {...register("min_order_quantity")}
          />
          <label htmlFor="Available Quantity" className="text-success">
            Available Quantity
          </label>
          <input
            className="mb-3 py-2"
            value={tool.avail_quantity}
            {...register("avail_quantity")}
          />

<label htmlFor="Price" className="text-success">
            Price
          </label>
          <input
            className="mb-3 py-2"
            value={tool.price}
            {...register("price")}
          />

          <input
            className="mb-3 py-2"
            placeholder="Your order Quantity"
            {...register("order_quantity")}
          />

          <input
            className="btn btn-success mb-3 py-2 fw-bold"
            type="submit"
            value="Make Your Order"
          />
        </form> */}
        </div>
      </div>
    </div>
  );
};

export default BuyTool;
