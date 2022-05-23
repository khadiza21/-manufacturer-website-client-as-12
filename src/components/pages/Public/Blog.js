import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Bounce, Fade } from 'react-reveal';
// .ques{
//     color: gray;
//     font-weight: bold;
// }
// .b-text{
//     color: #e05b68;   
// }
const Blog = () => {
    return (
        <div className="mb-5 pb-5">
        <Bounce top>
          <h1 className=" b-text text-center mt-5  pt-5 fw-bold">OURS BLOGS</h1>
        </Bounce>
        <Accordion className="container my-3 py-2 " defaultActiveKey="0">
          <Accordion.Item eventKey="0" className=" border-0 shadow rounded my-4">
            <Accordion.Header>
              <Fade top>
                <h5 className="fw-bold ques">
                How will you improve the performance of a React Application?
                </h5>
              </Fade>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <ol>
         
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className=" border-0 shadow rounded my-4">
            <Accordion.Header>
              <Fade bottom>
                <h5 className="fw-bold ques">
                What are the different ways to manage a state in a React application?
                </h5>
              </Fade>
            </Accordion.Header>
            <Accordion.Body>
              <ol>
             
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className=" border-0 shadow rounded my-4">
            <Accordion.Header className="ques">
              <Fade top>
                <h5 className="fw-bold ques">
                How does prototypical inheritance work?
                </h5>
              </Fade>
            </Accordion.Header>
            <Accordion.Body>
              <ol>
         
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className=" border-0 shadow rounded my-4">
            <Accordion.Header className="ques">
              <Fade bottom>
                  <span className='fw-bold'></span>
                <h5 className="fw-bold ques">
                Why you do not set the state directly in React. For example, if you have <span className='fw-bold'>const [products, setProducts] = useState([])</span> . Why you do not set  <span className='fw-bold'>products = [...] </span> instead, you use the  <span className='fw-bold'>setProducts</span>
                </h5>
              </Fade>
            </Accordion.Header>
            <Accordion.Body>
              <ol>
            
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className=" border-0 shadow rounded my-4">
            <Accordion.Header className="ques">
              <Fade bottom>
                  <span className='fw-bold'></span>
                <h5 className="fw-bold ques">
                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h5>
              </Fade>
            </Accordion.Header>
            <Accordion.Body>
              <ol>
            
              </ol>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className=" border-0 shadow rounded my-4">
            <Accordion.Header className="ques">
              <Fade bottom>
                  <span className='fw-bold'></span>
                <h5 className="fw-bold ques">
                What is a unit test? Why should write unit tests?
                </h5>
              </Fade>
            </Accordion.Header>
            <Accordion.Body>
              <ol>
            
              </ol>
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>
      </div>
    );
};

export default Blog;