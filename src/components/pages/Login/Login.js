import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../../shared/Loading";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-danger">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address! ");
    }
  };
  return (
    <div className="container mx-auto mt-5 pt-5">
      <h2 className="text-center text-success  fs-1 pb-5 py-3 fw-bold">
        Login!
      </h2>
      <form
        className="d-flex flex-column w-75 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          ref={emailRef}
          type="email"
          placeholder="Your Email"
          className="ps-2 py-2 "
          {...register("email", {
            required: {
              value: true,
              message: "Email is Required",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Provide a valid Email",
            },
          })}
        />
        <label className="mb-3">
          {errors.email?.type === "required" && (
            <span className="text-danger">{errors.email.message}</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </label>

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="ps-2 py-2 "
          {...register("password", {
            required: {
              value: true,
              message: "Password is Required",
            },
            minLength: {
              value: 6,
              message: "Must be 6 characters or longer",
            },
          })}
        />
        <label className="mb-3">
          {errors.password?.type === "required" && (
            <span className="text-danger">{errors.password.message}</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </label>

        {signInError}
        <input
          className="btn btn-success fw-bold  text-light"
          type="submit"
          value="Login"
        />
      </form>

      <p className="mt-5 fw-bold w-75 mx-auto">
        New to Bio Earth?{" "}
        <Link
          to="/register"
          //   onClick={navigateRegister}
          className="text-decoration-none text-danger pe-auto"
        >
          Please Register
        </Link>{" "}
      </p>

      <p className=" fw-bold w-75 mx-auto">
        Forget Passsword?{" "}
        <button
          onClick={resetPassword}
          className="fw-bold btn btn-link text-decoration-none text-danger pe-auto"
        >
          Reset Passsword
        </button>{" "}
      </p>
      <div className=" fw-bold d-flex align-items-center w-75 mx-auto">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2 ">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success w-75 mb-5 fw-bold d-block mx-auto "
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
