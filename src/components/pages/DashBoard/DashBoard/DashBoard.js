import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CustonLink from "../../../shared/CustonLink";

const DashBoard = () => {
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
                <CustonLink to="/dashboard">Add Review</CustonLink>
                <CustonLink to="/dashboard/myorder">My Order</CustonLink>
                <CustonLink to="/dashboard/profile">Profile</CustonLink>
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
