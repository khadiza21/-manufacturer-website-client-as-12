import React from "react";
import warehouse from "../../../images/live-site/Freshoho.png";
import tralive from "../../../images/live-site/Tralive BK.png";
import laptop from "../../../images/live-site/BK Laptop Analysis.png";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <Container className="container my-5 py-3">
      <div>
        <Row>
          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center my-3 align-items-center "
          >
            <img className="img-fluid rounded h-75" src={laptop} alt="" />
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center my-3 align-items-center "
          >
            <div className="px-4  text-justify">
              <Fade bottom>
                <h2 className="my-2 text-info fs-2 fw-bold pb-3">BK Laptop</h2>
              </Fade>
              <Fade top>
                <h5 className="my-2 text-primary fw-bold pb-3 ">
                  About This Project{" "}
                </h5>
              </Fade>
              <Fade bottom>
                <Fade top></Fade>
                <Fade bottom></Fade>
              </Fade>

              <button className="btn btn-success text-light fw-bold btn-link text-decoration-none">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  rel="noreferrer"
                  target="_blank"
                  href="https://bk-laptop-analysis-react-router.netlify.app/"
                >
                  Go To Live Site
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center my-3 align-items-center "
          >
            <img className="img-fluid rounded h-75" src={tralive} alt="" />
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center my-3 align-items-center "
          >
            <div className="px-4  text-justify">
              <Fade bottom>
                <h2 className="my-2 text-info fs-2 fw-bold pb-3">Tralive BK</h2>
              </Fade>
              <Fade top>
                <h5 className="my-2 text-primary fw-bold pb-3 ">
                  About This Project{" "}
                </h5>
              </Fade>
              <Fade bottom>
                <Fade top></Fade>
                <Fade bottom></Fade>
              </Fade>

              <button className="btn btn-success text-light fw-bold btn-link text-decoration-none">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  rel="noreferrer"
                  target="_blank"
                  href="https://tralive-bk-auth.web.app/"
                >
                  Go To Live Site
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center my-3 align-items-center "
          >
            <img className="img-fluid rounded h-75" src={warehouse} alt="" />
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center my-3 align-items-center "
          >
            <div className="px-4  text-justify">
              <Fade bottom>
                <h2 className="my-2 text-info fs-2 fw-bold pb-3">Freshoho</h2>
              </Fade>
              <Fade top>
                <h5 className="my-2 text-primary fw-bold pb-3 ">
                  About This Project{" "}
                </h5>
              </Fade>
              <Fade bottom>
                <Fade top></Fade>
                <Fade bottom></Fade>
              </Fade>

              <button className="btn btn-success text-light fw-bold btn-link text-decoration-none">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  rel="noreferrer"
                  target="_blank"
                  href="https://warehouse-react-node-mongo.web.app/"
                >
                  Go To Live Site
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
