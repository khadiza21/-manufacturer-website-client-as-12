import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-danger">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    navigate("/home");
  };

  return (
    <div className="container mx-auto mt-5 pt-5">
      <h2 className="text-center text-success  fs-1 pb-5 py-3 fw-bold">
        Sign Up
      </h2>

      <form
        className="d-flex flex-column w-75 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="ps-2 py-2 "
          {...register("name", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
        />
        <label className="mb-3">
          {errors.name?.type === "required" && (
            <span className=" text-danger">{errors.name.message}</span>
          )}
        </label>
        <input
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
        />{" "}
        <label className="mb-3">
          {errors.email?.type === "required" && (
            <span className=" text-danger">{errors.email.message}</span>
          )}
          {errors.email?.type === "pattern" && (
            <span className=" text-danger">{errors.email.message}</span>
          )}
        </label>
        <input
          type="password"
          placeholder="Password"
          className="ps-2 py-3 "
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
        />{" "}
        <label className="mb-3">
          {errors.password?.type === "required" && (
            <span className="text-danger">{errors.password.message}</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className=" text-danger">{errors.password.message}</span>
          )}
        </label>
        {signInError}
        <input
          className="btn btn-dark  fw-bold text-light"
          type="submit"
          value="Sign Up"
        />
      </form>

      <p className="mt-5 w-75 mx-auto">
        Already have an account?{" "}
        <Link
          to="/login"
          //   onClick={navigateLogin}
          className="text-decoration-none text-danger pe-auto"
        >
          Please LogIn
        </Link>{" "}
      </p>

      <div className=" fw-bold d-flex align-items-center w-75 mx-auto">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2 ">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success w-75 mb-5 fw-bold d-block mx-auto my-2"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Register;
