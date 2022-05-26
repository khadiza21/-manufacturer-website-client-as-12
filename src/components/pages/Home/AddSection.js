import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import p from '../../../images/ohters/p.PNG';

const AddSection = () => {
    return (
        <div>
        <Container className="container my-5 pb-5">
          <Row className="mb-5 py-3">
            <Col xs={12} sm={12} md={6} >
              <img src={p} className="shadow rounded img-fluid h-75  my-4" alt="" />
            </Col>
            <Col xs={12} sm={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className=' fw-bold'>
              
              <h1 className="text-success">About Us</h1>
              <h4 >Why We Are Best?</h4>
              <p>A cutlass is a simple or small tool operated by hand to carry out agricultural activities. Most farming activities in the country are carried out with the aid of simple farm toolsA cutlass is a simple or small tool operated by hand to carry out agricultural activities. Most farming activities in the country are carried out with the aid of simple farm tools</p>
          </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AddSection;