import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../../shared/Loading';

const ManageOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => 
    fetch('http://localhost:5000/orders/admin').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="container my-5">
            <h1 className=" text-center py-5">Manage  orders: {orders.length}</h1>
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
  
                
            
              </tbody>
            ))}
          </Table>
        </div>
        </div>
    );
};

export default ManageOrders;