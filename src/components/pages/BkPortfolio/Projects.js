import React from "react";
import "./Projects.css";
// import warehouse from "../../../images/live-site/Freshoho.png";
// import tralive from "../../../images/live-site/Tralive BK.png";
// import laptop from "../../../images/live-site/BK Laptop Analysis.png";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div className="container projects-container mb-5 pb-5">
      <div className="shadow rounded p-3 py-5 projects-info">
        <Fade bottom>
          <h2 className="my-2 fs-2 fw-bold pb-3 text-center">BK Laptop</h2>
        </Fade>
        <Fade top>
          <h6 className="my-2  fw-bold pb-3 ">About This Project: </h6>
        </Fade>
        <Fade bottom>
          <Fade top>
            <ul className="text fw-bold">
              <li>
                This is a website "Laptop Analysis".The website is for laptop
                analysis Purpose.
              </li>
              <li>
                This project is made by Mainly routing , react and another use
                here html and React and JS. Routing is like path that can help
                to visit us one part to another part without reloading page and
                react is a framework of JS.It's makes programmer life easy.
              </li>
              <li>
                In this website buyer can take laptop and get services about
                laptop and they can repair their laptop .
              </li>
              <li>
                Here User can see other persons reviews and also can read some
                blogs. Viewer get contact info and can know to about us.
              </li>
            </ul>
          </Fade>
          <Fade bottom>
            <p className="fs-5">
              {" "}
              <span className="fw-bold">Language:</span>  <span  className="fs-5">HTML5, CSS3, JS , JS
              ES6</span>
            </p>
            <p className="fs-5">
              <span className="fw-bold">Libraris:</span>
              <span  className="fs-5">React , React-Router-Dom, React-Dom, react-bootstrap,react-reveal</span>
              
            </p>
          </Fade>
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

      <div className="shadow rounded p-3 py-5 projects-info">
        <Fade bottom>
          <h2 className="my-2  fs-2 fw-bold pb-3 text-center ">Tralive BK</h2>
        </Fade>
        <Fade top>
          <h6 className="my-2  fw-bold pb-3 ">About This Project </h6>
        </Fade>
        <Fade bottom>
          <Fade top>
            <ul className="text fw-bold">
              <li>
                My Project name is Tralive BK. Here This site is individual
                Service provide site.
              </li>
              <li>
                Tralive BK site provide travel guide for tourist. Here have
                Home, Service , About, Blog etc routs.
              </li>
              <li>
                Tralive BK have a privateRoute which name is checkout whice
                servce id wise works.
              </li>
              <li>
                Tralive BK is a single page application which made by React.Here
                used React router dom.
              </li>
              <li>
                Tralive BK have authentication and authorization system. Forget
                passord and Reset password also have this website
              </li>
            </ul>
          </Fade>
          <Fade bottom>
            <p className="fs-5">
              {" "}
              <span className="fw-bold">Language:</span>  <span  className="fs-5">HTML5, CSS3, JS , JS
              ES6</span>
            </p>
            <p className="fs-5">
              <span className="fw-bold">Libraris:</span>
              <span  className="fs-5">React , React-Router-Dom, React-Dom,
              react-bootstrap,react-firebase-hooks,react-reveal,react-toastify</span>
              
            </p>
          </Fade>
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

      <div className="shadow rounded p-3 py-5 projects-info">
        <Fade bottom>
          <h2 className="my-2  fs-2 fw-bold pb-3 text-center ">Freshoho</h2>
        </Fade>
        <Fade top>
          <h6 className="my-2 fw-bold pb-3 ">About This Project: </h6>
        </Fade>
        <Fade bottom>
          <Fade top>
            <ul className="text fw-bold">
              <li>
                This is a website "Freshoho".The website is for warehouse
                inventory Purpose.
              </li>
              <li>
                This is the full stack website cause forntend and backend also
                here. This is the forntend part client side code .
              </li>
              <li>
                This project client side is made by Mainly authentication ,
                routing , react and another use here html and React and JS.
                Routing is like path that can help to visit us one part to
                another part without reloading page and react is a framework of
                JS.It's makes programmer life easy.
              </li>
              <li>
                Here have some private route when a user logged in then user can
                see private route.
              </li>
              <li>
                Here User can create their account and add new inventory and
                they can delete their inventory.
              </li>
            </ul>
          </Fade>
          <Fade bottom>
            <p className="fs-5">
              {" "}
              <span className="fw-bold">Language:</span> 
              <span  className="fs-5">HTML5, CSS3, JS , JS
              ES6</span>
              
            </p>
            <p className="fs-5">
              <span className="fw-bold">Libraris:</span>
              <span className="fs-5">
                  React , React-Router-Dom, React-Dom,
              react-bootstrap,react-firebase-hooks,react-reveal,react-toastify
              </span>
            
            </p>
          </Fade>
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
    </div>
  );
};

export default Projects;
