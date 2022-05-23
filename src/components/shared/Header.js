import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
            <CustonLink to="/blog">Blogs</CustonLink>
            <CustonLink to="/developerimg">About Developer</CustonLink>

            
            { 
            user && <CustonLink to="/dashboard">Dashboard</CustonLink>
            }

            {user ? (
              <button
                className="btn btn-success text-light fw-bold btn-link text-decoration-none"
                onClick={handleSignOut}
              >
                Sign Out <i className="fa-solid fa-right-to-bracket"></i>
              </button>
            ) : (
              <CustonLink
                className="btn btn-success fw-bold text-light"
                to="/login"
              >
                {" "}
                Login <i className="fa-solid fa-right-to-bracket"></i>
              </CustonLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
