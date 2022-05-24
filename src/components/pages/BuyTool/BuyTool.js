import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const BuyTool = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams({});
  const [user] = useAuthState(auth);
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tools/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((tdata) => setTool(tdata));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((addOrder) => {
       // console.log(addOrder, user.email, user.uid);

        toast("Oder Added Successfully...");
      });

    reset();
  };

  return (
    <div className="container mx-auto my-5 pb-5">
      <div>
        <h2 className="py-3 text-success fs-1 pb-5  text-center fw-bold">
          Make A Order
        </h2>
        <div className=" d-flex justify-content-center">
          <div>
            <h3 className="fw-bold text-center my-5">
              Tools Name: {tool.name}
            </h3>
            <img
              src={tool.img}
              className="img-fluid  shadow"
              style={{ height: "500px" }}
              alt=""
            />

            <h6 className="fw-bold text-center mb-5 py-2">
              Tools ID: {tool._id}
            </h6>
          </div>
        </div>
      </div>
      <div className="">
        {console.log(user)}
        {/* <h6>{id}</h6>
    
      <h6>{tool.min_order_quantity}</h6>
      <h4>{user?.email}</h4>
      <h4>{user?.uid}</h4>
      <h4>{user?.displayName}</h4>
     
      {console.log(user)} */}

        <form
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

          {/* <input
            className="mb-3 py-2"
            value={tool.id}
            {...register("id", { required: true, maxLength: 20 })}
          /> */}

          <input
            className="mb-3 py-2"
            value={tool.name}
            {...register("name")}
          />

          <input className="mb-3 py-2" value={tool.img} {...register("img")} />
          <label htmlFor="Size" className="text-success">
            Size
          </label>
          <input
            className="mb-3 py-2"
            value={tool.size}
            {...register("size")}
          />
          <label htmlFor="Description" className="text-success">
            Description
          </label>
          <textarea
            className="mb-3 py-2"
            value={tool.description}
            {...register("description")}
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
          <label htmlFor="Metarial" className="text-success">
            Material
          </label>
          <input
            className="mb-3 py-2"
            value={tool.material}
            {...register("material")}
          />
          <label htmlFor="Availity" className="text-success">
            Availity
          </label>
          <input
            className="mb-3 py-2"
            value={tool.availity}
            {...register("availity")}
          />
          <label htmlFor="Available Quantity" className="text-success">
            Available Quantity
          </label>
          <input
            className="mb-3 py-2"
            value={tool.avail_quantity}
            {...register("avail_quantity")}
          />
          <label htmlFor="Minimum Order Quantity" className="text-success">
            Minimum Order Quantity
          </label>
          <input
            className="mb-3 py-2"
            value={tool.min_order_quantity}
            {...register("min_order_quantity")}
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
        </form>
      </div>
    </div>
  );
};

export default BuyTool;
