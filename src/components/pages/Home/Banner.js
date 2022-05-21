import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade, Flip } from "react-reveal";
import banner from "../../../images/banner.png";

const Banner = () => {
  return (
    <Container className="container my-5 py-3">
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="px-2  text-justify">
            <Flip top>
              <h4 className="my-2 ban-t">IT'S HOW YOU LIVE</h4>
            </Flip>
            <Fade bottom>
              <h2 className="mt-3">PLANT DREAMS</h2>
            </Fade>
            <Flip top>
              <h2 className="mt-3">Grow Your Healthy Life</h2>
            </Flip>
            <Fade bottom>
              <h2 className="mt-3">FLAT 70% OFF/ALL PRODUCTS</h2>
            </Fade>
            <Button className="btn my-3 fw-bold" variant="btn">
              Purshace
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-3">
          <img className="img-fluid rounded " src={banner} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
