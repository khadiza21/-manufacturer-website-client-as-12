import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../shared/Loading";

const ManageOrders = () => {
  const [aorders, setOrders] = useState([]);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders/admin").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((deleteItem) => {
          console.log(deleteItem);
          toast("Deleted One Item!");
          const remaining = aorders.filter((order) => order._id !== id);
          refetch();
          setOrders(remaining);
        });
    }
  };

  return (
    <div className="container my-5">
      <h1 className=" text-center py-5">Manage orders: {orders.length}</h1>
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
              <th>Status</th>
              <th>Remove</th>
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
                  <small className="text-danger">UNPAID</small>
                )}
                {order.price && order.paid && (
                  <small className="text-success">PAID</small>
                )}
              </td>
              <td>
                {
                  <div>
                    {order.price && order.paid && (
                      <small className="fw-bold my-2">PENDING </small>
                    )}
                    <br />
                    {order.price && order.paid && (
                      <button className="btn btn-success bg-success fw-bold mt-2">
                        Shipted
                      </button>
                    )}
                  </div>
                }
              </td>
              <td className="pb-0 fw-bold ">
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

export default ManageOrders;
