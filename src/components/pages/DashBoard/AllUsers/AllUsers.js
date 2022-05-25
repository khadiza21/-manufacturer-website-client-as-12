import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user",{ 
        method:'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container my-5">
      <h2 className="py-3 text-success fs-2 pb-5  text-center fw-bold">
        All Users:
        {users.length}
      </h2>

      <div className=" table-responsive">
        <Table hover size="sm" className="text-center" striped>
          <thead className="rounded">
            <tr className="rounded">
            
              <th className="fs-4">User No</th>
              <th className="fs-4">User Email</th>
              <th className="fs-4">Make Admin</th>
             
            </tr>
          </thead>

          <tbody>
            {
            users.map((user,index) => (
              <UserRow key={user._id}
              index={index}
               user={user} refetch={refetch}></UserRow>
            ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
