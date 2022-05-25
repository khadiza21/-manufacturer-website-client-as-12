import React, {  useRef } from "react";


import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  
} from "react-firebase-hooks/auth";
import Loading from "../../shared/Loading";
// import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";
import { Button, Form } from "react-bootstrap";
import SocilalLogin from "./SocilalLogin";

const Login = () => {
  

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger"> Error: {error?.message} </p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address! ");
    }
  };
  return (
    <div className="container w-100 mx-auto my-5 py-5">
    <h3 className="text-danger text-center mt-2 fw-bold">Please LogIn</h3>
    <Form onSubmit={handleSubmit} className="mt-5 pt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          type="email"
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
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button
        className="d-block mx-auto w-50 fw-bold"
        variant="success"
        type="submit"
      >
        LogIn
      </Button>
    </Form>
    <p className="my-2">
      New to Tralve BK?{" "}
      <Link
        to="/register"
        onClick={navigateRegister}
        className="text-decoration-none text-danger pe-auto"
      >
        Please Register
      </Link>{" "}
    </p>
    <p className="my-2">
      Forget Passsword?{" "}
      <button
        onClick={resetPassword}
        className=" btn btn-link text-decoration-none text-danger pe-auto"
      >
        Reset Passsword
      </button>{" "}
    </p>
    {errorElement}
    <SocilalLogin></SocilalLogin>
  </div>
  );
};

export default Login;
