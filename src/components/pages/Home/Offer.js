import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import a from '../../../images/ohters/1.png';
import b from '../../../images/ohters/2.png';
import c from '../../../images/ohters/3.png';

const Offer = () => {
    return (
        <Container className="container my-5 ">
        <Row className="mb-5 py-3 g-3">
          <Col xs={12} sm={12} md={4} className="my-5">
            <div
              style={{ backgroundColor: "rgb(24, 169, 180)" }}
              className="d-flex h-100 rounded shadow"
            >
              <div className="my-auto py-5 text-center">
                <h6 className="fw-bold">UPTO 20% OFF</h6>
                <h4>Change Your Garden </h4>
                <Button className="btn-danger">See Details</Button>
              </div>
  
              <div>
                <img src={a} className="img-fluid h-75  my-4" alt="" />
              </div>
            </div>
          </Col>
  
          <Col xs={12} sm={12} md={4} className=" my-5">
            <div
              className="d-flex h-100 rounded shadow"
              style={{ backgroundColor: "rgb(161, 201, 156)" }}
            >
              <div className="my-auto py-5  text-center">
                <h6 className="fw-bold">UPTO 20% OFF</h6>
                <h4>Tool Awesome</h4>
                <Button className="btn-danger">See Details</Button>
              </div>
              <div>
                <img src={b} className="  img-fluid  my-4" alt="" />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} className=" my-5">
            <div
              className="d-flex h-100  rounded shadow"
              style={{ backgroundColor: "rgb(51, 129, 100)" }}
            >
              <div className="my-auto  py-5 text-center">
                <h6 className="fw-bold">UPTO 20% OFF</h6>
                <h4>Collected For Gardens</h4>
                <Button className="btn-danger">See Details</Button>
              </div>
              <div>
                <img src={c} className=" img-fluid  my-4" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Offer;