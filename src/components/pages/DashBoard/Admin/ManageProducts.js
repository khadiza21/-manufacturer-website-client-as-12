import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../shared/Loading";

const ManageProducts = () => {
    const [atools, setTools] = useState([]);
  const { data: tools, isLoading,refetch } = useQuery("tools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>
}




const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
    
       const url = `http://localhost:5000/tools/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
      })
        .then((res) => res.json())
        .then((deleteItem) => {
          console.log(deleteItem);
          toast("Deleted One Item!");
          const remaining = atools.filter((order) => order._id !== id);
          refetch();
          setTools(remaining);
        });
    }
  };
   
  return (
    <div className="container my-5">
      <h1 className=" text-center py-5">Manage Tools Products: {tools.length}</h1>
      <div className=" table-responsive">
        <Table hover size="sm" className="text-center" striped>
          <thead className="rounded">
            <tr className="rounded">
              <th className=" img">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Vendor</th>
              <th>Material</th>
              <th>Delete</th>
            </tr>
          </thead>

          {tools.map((tool) => (
            <tbody key={tool._id} refetch={refetch}>
              <td className="">
                <img src={tool.img} alt="" className=" img-set img-fluid" />
              </td>
              <td className="pb-0 pt-3 fw-bold">{tool.name}</td>
              <td className="pb-0 pt-3 fw-bold">
                <sup>$</sup>
                {tool.price}
              </td>
              <td className="pb-0 pt-3 fw-bold">{tool.vendor}</td>
              <td className="pb-0 pt-3 fw-bold">{tool.material}</td>
              <td className="pb-0 fw-bold ">
                  <i
                   onClick={() => handleDelete(tool._id)}
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

export default ManageProducts;
