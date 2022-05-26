import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../shared/Loading";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3SOuC0tDkgFh6dOGppCdQL4xkPrSr7fSTDbNvzsJLr8xTV56aFqSqOsm0YkIEYLxSD7NiRTaM1IuvZL9mCCVde00fglK8s0U"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    <Loading></Loading>;
  }
//55555555555555554444
console.log(orders?.toolsname);
  return (
    <div className="container my-5 ">


      <div class="card  w-75  shadow my-5 bg-light">
        <div class="card-body">
          <p className="fw-bold">
            YOU SELECT THIS TOOLS , {orders?.toolsname}
          </p>
          <h2 class="card-title">Please Pay for {orders?.toolsname}</h2>
          <p>Please pay: ${orders?.price}</p>
        </div>
      </div>

     <div class="card w-75  shadow bg-light text-dark">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm 
           //orderpay={orders} 
           toolsname={orders?.toolsname} 
            price={orders?.price} 
            email={orders?.email} 
            _id={orders?._id} 
            />
          </Elements>
        </div>
      </div>  


    </div>
  );
};

export default Payment;
