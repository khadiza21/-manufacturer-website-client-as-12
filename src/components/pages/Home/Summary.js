import React from "react";
import { Button } from "react-bootstrap";
//import Background from "../../../images/businessSummary.webp";

//   const myStyle={
//         backgroundImage:  `url(${Background})`,
//         height:'100vh',
//         // marginTop:'-70px',
//         // fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };

const Summary = () => {
  return (
    <div className="container py-5 mb-0 my-5">
      <div>
        <h1 className=" text-center fw-bold"  style={{ color: "#483b33" }}>BUSINESS SUMMARY</h1>
      </div>
      <div style={{ backgroundColor: "rgb(5, 26, 13)" }} className=" my-5 py-5 rounded shadow">
        <div className="row  text-light text-center">
          <div className="col-lg-3 col-md-6 col-12 py-3 px-1 my-4">
            <i
              className="fa-solid fa-tree text-success  mb-3"
              style={{ fontSize: "67px" }}
            ></i>
            <h1 style={{ fontSize: "64px" }}>
              2.5<sup>k</sup>
            </h1>
            <h4>Completed Projects</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-12 py-3 px-1 my-4">
            <i
              className="fa-solid fa-flag text-success mb-3 "
              style={{ fontSize: "67px" }}
            ></i>
            <h1 style={{ fontSize: "64px" }}>88 </h1>
            <h4>Countries</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-12  py-3 px-1 my-4">
            <i
              className="fa-solid fa-award text-success  mb-3"
              style={{ fontSize: "67px" }}
            ></i>
            <h1 style={{ fontSize: "64px" }}>
              23<sup>+</sup>
            </h1>
            <h4>Awards & Honors</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-12  py-3 px-1 my-4">
            <i
              className="fa-solid fa-users text-success mb-3"
              style={{ fontSize: "67px" }}
            ></i>
            <h1 style={{ fontSize: "64px" }}>
              99<sup>%</sup>
            </h1>
            <h4>Satisfied Customers</h4>
          </div>
        </div>

        <div className="row p-3 bg-light w-75 mx-auto rounded shadow ">
          <div className="col-lg-6 col-md-6 col-12">
            <h5 className="text-success  fw-bold">
              {" "}
              Have any question about us or get a products request?
            </h5>
            <h6 style={{ color: "#483b33" }} className="fw-bold">Don't hesitate to contact us</h6>
          </div>
          <div className="col-lg-6 col-md-6 col-12 start-100 text-light text-center ">
            <Button className="border-0 fw-bold btn btn-success mt-3 py-3">
              Request For Quote
            </Button>
            <Button
              className="border-0 mx-3 fw-bold btn  mt-3 py-3"
              style={{ backgroundColor: "#483b33" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
    //  background-color: #483b33;
  );
};

export default Summary;
