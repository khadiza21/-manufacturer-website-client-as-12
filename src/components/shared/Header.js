import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo .webp";
import CustonLink from "./CustonLink";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className="px-5" fluid>
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
            <CustonLink to="/tools">Tools</CustonLink>

            <NavDropdown
              className="text-success ps-3 fw-bold"
              title="Link"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {user ? (
              <button
                className="btn btn-success text-light fw-bold btn-link text-decoration-none"
                onClick={handleSignOut}
              >
                Sign Out <i class="fa-solid fa-right-to-bracket"></i>
              </button>
            ) : (
              <CustonLink
                className="btn btn-success fw-bold text-light"
                to="/login"
              >
                {" "}
                Login <i class="fa-solid fa-right-to-bracket"></i>
              </CustonLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
