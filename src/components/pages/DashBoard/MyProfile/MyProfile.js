import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";

const MyProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  //   <div>
  //
  //
  //           </div>
//   .img-review {
//     height: 50px;
//     width: 50px;
//     border-radius: 47%;
//   }
  return (
    <div className="container mx-auto my-5 pb-5">
      {console.log(user)}
      <h3 className="py-3 text-success fs-1 pb-5  text-center fw-bold">
        Your Profile
      </h3>
      <Row className="">
        <Col   xs={12}
            md={6}>
          <img style={{height:'170px',width:'170px',borderRadius:'50%'}} src={user.photoURL} alt="" />
        </Col>
        <Col   xs={12}
            md={6}>
          <p>{user.displayName}</p>
           <p>{user.email}</p>
        </Col>
      </Row>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-75 mx-auto"
      >
        <input
          // readOnly
          value={user?.email}
          className="mb-3 py-2 ps-2"
          {...register("email")}
        />
        <input
          // readOnly
          value={user?.uid}
          className="mb-3 py-2 ps-2"
          {...register("uid")}
        />
        <input
          // readOnly
          value={user?.displayName}
          className="mb-3 py-2 ps-2"
          {...register("displayName")}
        />

        <input
          required
          className="mb-3 py-2"
          placeholder=" Education"
          {...register("edu")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Location(city/district)"
          {...register("location")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" Phone Number"
          {...register("phone")}
        />
        <input
          required
          className="mb-3 py-2"
          placeholder=" LinkedIn URL"
          {...register("linkedin")}
        />

        <input
          className="btn btn-success mb-3 py-2 fw-bold"
          type="submit"
          value="Update Your Profile"
        />
      </form>
    </div>
  );
};

export default MyProfile;
