import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo .webp";
import CustonLink from "./CustonLink";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="px-5"  fluid>
        <Navbar.Brand as={Link} to="home" className="fw-bold  ">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <CustonLink to="/">Home</CustonLink>
            <CustonLink to="/">Link</CustonLink>
            
            <NavDropdown className="text-success ps-3 fw-bold" title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <CustonLink to="/" disabled>
              Link
            </CustonLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
