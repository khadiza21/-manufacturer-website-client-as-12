import React from "react";
import { Accordion } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";

const Blog = () => {
  return (
    <div className="mb-5 pb-5">
      <Bounce top>
        <h1 className=" text-success text-center mt-5  pt-5 fw-bold">
          OURS BLOGS
        </h1>
      </Bounce>
      <Accordion className="container my-3 py-2 " defaultActiveKey="0">
        <Accordion.Item eventKey="0" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade top>
              <h5 className="fw-bold fw-bold " style={{ color: "gray" }}>
                How will you improve the performance of a React Application?
              </h5>
            </Fade>{" "}
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                1.We can keep the Components state local to improve the
                perfomance in react
              </li>
              <li>2. Monitoring react components to prevent the re renders.</li>
              <li>3. Using dynamic import splitting code in react.</li>
              <li>4. Optimize picture to load images in quick time.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade bottom>
              <h5 className="fw-bold fw-bold " style={{ color: "gray" }}>
                What are the different ways to manage a state in a React
                application?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <h5>There are 4 kinds of ways to manage a state in react app.</h5>
              <li>
                1.Local state: ocal state is data we manage in one or another
                component.
              </li>
              <li>
                2. global state: Global state is data we manage across multiple
                components.
              </li>
              <li>
                3.Server state: It comes from another server that should be
                integrated with thr UI state.
              </li>
              <li>
                4. URL state: The data which are not exist in our url including
                pathnmae and querry parameters
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="fw-bold">
            <Fade top>
              <h5 className="fw-bold fw-bold " style={{ color: "gray" }}>
                How does prototypical inheritance work?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <h5>
              A prototype is a working object instance. When we read a property
              from object and it is missing, javascript takes it automatically
              from the prototype. This is called prototypal inheritance. In
              order to get and set the Prototype of an object, we use Object,
              getPrototypeOf.
            </h5>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="fw-bold">
            <Fade bottom>
              <h5 className="fw-bold fw-bold " style={{ color: "gray" }}>
                Why you do not set the state directly in React. For example, if
                you have{" "}
                <span className="text-success">
                  const [products, setProducts] = useState([])
                </span>{" "}
                . Why you do not set{" "}
                <span className="text-success">products = [...] </span> instead,
                you use the <span className="text-success">setProducts</span>
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <p>React probably knows that we should never change or update the state directly. In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree.</p>
              <p><span className="font-bold">Wrong:</span> Instead use setState method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering. Example: this.state.message = 'Hello world'</p>
              <p><span className="font-bold">Correct:</span> You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax. Example: this.setState message: 'Hello World'</p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="fw-bold">
            <Fade bottom>
              <h5 className="fw-bold fw-bold " style={{ color: "gray" }}>
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol></ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="fw-bold">
            <Fade bottom>
              <h5 className="fw-bold fw-bold " style={{ color: "gray" }}>
                What is a unit test? Why should write unit tests?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <h5>
              Unit tests are the tests which are done by the developers before
              deploying any application. it is done by the developers because
              before deploying the application developers want to check that the
              application is working as there expectation or not. We should run
              unit test because it allows us to think actually what has to be
              done in the application. if we dont write the test maybe the
              application would not work appropriately and will make bad user
              experience. Why we do not set the state directly in React. We
              should not update the state directly. Because if we try to set the
              state directy as a example(products=[]) , then it wont re render
              the component. We need to use setState (setProducts) because it
              schedules an update to a component's state object. If the state
              changes the component then responds by re rendering.
            </h5>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
