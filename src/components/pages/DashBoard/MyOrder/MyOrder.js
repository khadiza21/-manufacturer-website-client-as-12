
import React, { useEffect, useState } from 'react';
 import { Table } from 'react-bootstrap';
 import './MyOrder.css';
import { useAuthState } from 'react-firebase-hooks/auth';

// import { useNavigate } from 'react-router-dom';
//import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email
        const getOrders = async () => {
            const url = `http://localhost:5000/orders?email=${email}`
            const { data } = await axios.get(url)
            setOrders(data)

        }
        getOrders();
    }, [user,orders])
  
    // useEffect(() => {
    //     if(user){
    //         fetch(`http://localhost:5000/orders?email=${user.email}`,{
    //             method:'GET',
    //             headers: {
    //                 'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => setOrders(data));
    //     }
    // //   const getItems = async () => {
    // //     const email = user?.email;
  
    // //     const url = `https://cryptic-stream-01124.herokuapp.com/myitems?email=${email}`;
    // //     try {
    // //       const { data } = await axiosPrivate.get(url);
    // //       setItems(data);
    // //     } catch (error) {
    // //       console.log(error.message);
    // //       if (error.response.status === 401 || error.response.status === 403) {
    // //         signOut(auth);
    // //         navigate("/login");
    // //       }
    // //     }
    // //   };
    // //   getItems();
    // }, [user]);
  
    const handleDelete = (id) => {
      const proceed = window.confirm("Are You Sure?");
      if (proceed) {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deleteOrder) => {
            console.log(deleteOrder);
            toast("Deleted Your One Order!");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          });
      }
    };
  
   const handlePaymet = (id) => {
       navigate(`/payment/${id}`);
   }
    

    return (
        <div className="container my-5">
        <h5 className="text-center fw-bold text-dark py-2">Your Email: <span className="text-success">{user.email}</span> </h5>
        <h4 className="text-center fw-bold fs-4 text-dark pb-5">Your Items: <span className="text-danger">{orders.length}</span></h4> 
  
    <div className=" table-responsive">
          <Table
            hover  size="sm" className="text-center"
            striped
   
        
          >
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
                <td className="pb-0 pt-3 fw-bold">{order.name}</td>
                <td className="pb-0 pt-3 fw-bold"><sup>$</sup>{order.price}</td>
                <td className="pb-0 pt-3 fw-bold">{order.order_quantity}</td>
                <td className="pb-0 pt-3 fw-bold">{order.material}</td>
  
                
                <td className="pb-0 fw-bold ">
                  <i
                   onClick={() => handlePaymet(order._id)}
                    class="fa-solid fa-cart-shopping fs-5"
                  ></i>
                </td>
                <td className="pb-0 fw-bold ">
                  <i
                   onClick={() => handleDelete(order._id)}
                    class="fa-solid fa-trash-can fs-5"
                  ></i>
                </td>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    );
};


export default MyOrder;