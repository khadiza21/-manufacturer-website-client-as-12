import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
 
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { Link,  useLocation,  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../../shared/Loading";
import SocilalLogin from "./SocilalLogin";


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    // error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);
  // updateError
const [token] = useToken(user); 
  const navigate = useNavigate();
  const location = useLocation(); 

  let from = location.state?.from?.pathname || "/"; 

  const navigateLogin = () => {
    navigate("/login");
  };

//   if (user) {
//     navigate(from, { replace: true });
//   }
 if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    // navigate('/home');
    navigate(from, { replace: true });
  }


 

  const handleRegister = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // await updateProfile({ displayName, photoURL });
    // alert('Updated profile');
    console.log("Updated profile");
    toast("Account Created Successfully!")


    console.log(name, email, password);
  };

  return (
    <div className="container w-100 mx-auto mt-5 pt-5">
      <h3 className="text-danger text-center fw-bold mt-2">Please Register</h3>
      <Form onSubmit={handleRegister} className="mt-2 pt-2">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // ref={emailRef}
            name="name"
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            // ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit" className='fw-bold'>
          Register
        </Button>
      </Form>
      <p className="my-2">
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-decoration-none text-danger pe-auto"
        >
          Please LogIn
        </Link>{" "}
      </p>
      <SocilalLogin></SocilalLogin>
    </div>
  );
};

export default Register;
