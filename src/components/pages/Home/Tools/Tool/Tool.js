import React from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = (props) => {
  const {
    _id,
    name,
    description,
    img,
    price,
    min_order_quantity,
    avail_quantity,
  } = props.inventory;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/tool/${id}`);
  };

  return (
    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">
      <div className="">
        <img className="img-r img-fluid rounded" src={img} alt="" />
      </div>
      <div className="">
        <h4 className=" mt-2 fw-bold">Name: {name}</h4>

        <Fade top>
          <h6 className="tool-text"> Description: {description}</h6>
        </Fade>
        <h5>Minmun Order Quantity:{min_order_quantity} </h5>
        <h5>Available Quantity: {avail_quantity}</h5>
        <h5>Price: {price}</h5>
      </div>

      <div>
        <Button
          className="btn btn-success"
          onClick={() => navigateToServiceDetail(_id)}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Tool;
