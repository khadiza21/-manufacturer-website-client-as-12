import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./MyOrder.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../../../api/axiosPrivate";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async () => {
      const email = user?.email;

      const url = `https://fathomless-plains-16450.herokuapp.com/orders?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrder();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://fathomless-plains-16450.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deleteItem) => {
          console.log(deleteItem);
          toast("Delivered One Item!");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  const handlePaymet = (id) => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="container my-5">
      <h5 className="text-center fw-bold text-dark py-2">
        Your Email: <span className="text-success">{user.email}</span>{" "}
      </h5>
      <h4 className="text-center fw-bold fs-4 text-dark pb-5">
        Your Items: <span className="text-danger">{orders.length}</span>
      </h4>

      <div className=" table-responsive">
        <Table hover size="sm" className="text-center" striped>
          <thead className="rounded">
            <tr className="rounded">
              <th className=" img">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Order Quantity</th>
              <th>Material</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>

          {orders.map((order) => (
            <tbody key={order._id}>
              <td className="">
                <img src={order.img} alt="" className=" img-set img-fluid" />
              </td>
              <td className="pb-0 pt-3 fw-bold">{order.toolsname}</td>
              <td className="pb-0 pt-3 fw-bold">
                <sup>$</sup>
                {order.price}
              </td>
              <td className="pb-0 pt-3 fw-bold">{order.order_quantity}</td>
              <td className="pb-0 pt-3 fw-bold">{order.material}</td>

              <td className="pb-0 pt-3 fw-bold">
                {order.price && !order.paid && (
                  <i
                    onClick={() => handlePaymet(order._id)}
                    class="fa-solid fa-cart-shopping fs-5"
                  ></i>
                )}
                {order.price && order.paid && (
                  <div className="text-success fw-bold">PAID
                  <h6>PAID</h6>
                  <p>Transaction id: <span>{order.transactionId}</span></p>
                  </div>
                )}
              </td>

              {/* <td className="pb-0 fw-bold ">
                  <i
                   onClick={() => handlePaymet(order._id)}
                    class="fa-solid fa-cart-shopping fs-5"
                  ></i>
                </td> */}
              <td className="pb-0 fw-bold  pt-3">
                {order.price && !order.paid && (
                  <i
                    onClick={() => handleDelete(order._id)}
                    class="fa-solid fa-trash-can fs-5"
                  ></i>
                )}
              </td>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyOrder;
