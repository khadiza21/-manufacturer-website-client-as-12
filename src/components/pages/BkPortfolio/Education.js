import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <Container className="container mb-5 py-5 ">
      <h1 className="text-center py-5">About Me</h1>
      <Row className="shadow">
        <Col
          xs={12}
          md={6}
          className=" d-flex justify-content-center my-3 align-items-center "
        >
          <div className="my-5 ">
            <h4>Name: Bibi Khadiza</h4>
            <h5>Email: bibikhadiza474@gmail.com</h5>
            <h6>Savar, Dhaka , Bangladesh</h6>
            <small>Front-End-Developer</small>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="my-5 ">
            <h3>MY SKILLS</h3>
            <p>Expertise: HTML5,CSS3,Bootstrap5,React  Bootstrap,React Route, React JS </p>
            <p>Comfortable: MongoDB, Node JS, Tailwind CSS, React Libray</p>
            <p>Familiar: Express JS, React Query, Daisy UI.</p>
          </div>
        </Col>
      </Row>

      <h1 className="text-center py-5">Education Background</h1>

      <Row className="shadow">
        <Col
          xs={12}
          md={6}
          className=" d-flex justify-content-center my-3 align-items-center "
        >
          <div className="my-5 ">
            <h3>CURRENT EDUCATION INFO</h3>
            <h4> B.Sc. in Computer Science and Technology.</h4>
            <h5>Green Univesity of Bangladesh</h5>
            <h6>April,2019 - April,2024 3rd year, 7th Semeter.</h6>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="my-5 ">
            <h3>PAST EDUCATION INFO</h3>
            <h4>Higher Secondary Certificate (HSC)</h4>
            <h5>Legend College</h5>
            <h6>June,2015 - June,2017 Savar, Dhaka</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
