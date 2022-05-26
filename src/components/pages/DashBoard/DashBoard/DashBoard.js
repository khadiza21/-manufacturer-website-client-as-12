import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import CustonLink from "../../../shared/CustonLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container className="px-5" fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                 <CustonLink to="/dashboard">Profile</CustonLink>
                {!admin && (
                  <>
                    <CustonLink to="/dashboard/review">Add Review</CustonLink>
                    <CustonLink to="/dashboard/myorder">My Order</CustonLink>
                  
                   
                  </>
                )}

                {admin && (
                  <>
                    <CustonLink to="/dashboard/users">All User</CustonLink>
                    <CustonLink to="/dashboard/addproduct">
                      Add New Product
                    </CustonLink>
                    <CustonLink to="/dashboard/manageorder">
                      Manage All Order
                    </CustonLink>
                    <CustonLink to="/dashboard/manageproduct">
                      Manage Product
                    </CustonLink>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
