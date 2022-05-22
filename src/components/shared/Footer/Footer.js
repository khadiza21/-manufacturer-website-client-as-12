import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import payment from "../../../images/payment.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="p-5 mb-0 head-foot">
      <div className="row rew">
        <div className="col-lg-3 col-md-6 col-12 py-3 px-1">
          <h3 className="ms-4">Information</h3>
          <ul className="list-style">
            <li>Our Stores</li>
            <li>Top Sellers</li>
            <li>Careers</li>
            <li>Refunds & Returns</li>
            <li>Deliveries</li>
            <li>Careers</li>
            <li>Refunds & Returns</li>
            <li>Deliveries</li>
            <li>Refunds & Returns</li>
            <li>Deliveries</li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-12 py-3 px-1">
          <h3>Get In Touch</h3>
          <p className="gray">
            <i className="fa-solid fa-address-card footer-icon"></i> Garden
            Street, New York , USA
            <br /> <i className="fa-solid fa-phone footer-icon"></i>{" "}
            +01234523456
            <br /> <i className="fa-solid fa-envelope footer-icon"></i>{" "}
            bioearth@gmail.com
            <br />
          </p>
          <div className="">
            <h6>CONNECT WITH US</h6>
            <div className="text-success fs-3 fw-bold">
              <span className="me-2">
                <i className="fa-brands fa-facebook-square footer-icon"></i>
              </span>
              <span className="me-2">
                <i className="fa-brands fa-twitter-square footer-icon"></i>
              </span>
              <span className="me-2">
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </span>
              <span className="me-2">
                <i className="fa-brands fa-youtube footer-icon"></i>
              </span>
            </div>
          </div>
          <div className="my-2">
            <h6>PAYMENT METHOD</h6>
            <img src={payment} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12  py-3 px-1">
          <h3 className="ms-4">Quick Links</h3>
          <ul className="list-style">
            <li>About Company</li>
            <li>Projects</li>
            <li>Testimoials</li>
            <li>Projects</li>
            <li>Testimoials</li>
            <li>Working Process</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-12  py-3 px-1">
          <h3>Newsletter</h3>
          <p className="gray">
            We will be glad to assist you in any question and encourage you to
            share your ideas and improvements with us.
          </p>
          <div className="bg-white row py-2  rounded ">
            <input
              type="email"
              className="inputt border-0 col-8"
              placeholder="Your email"
            />
            <Button className="btn btn-success col-3 mx-1 fw-bold">
              Send <i className="fa-solid fa-paper-plane"></i>
            </Button>
          </div>
        </div>
      </div>

      <hr />

      <div className="row text-center">
        <p className="col-lg-6 col-md-6 col-12">
          copyright © {year} <span className="text-success">Bio Earth</span> ,
          All Right Reserved.
        </p>
        <p className="col-lg-6 col-md-6 col-12 start-100">
          Developed By <span className="text-success">BK</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
