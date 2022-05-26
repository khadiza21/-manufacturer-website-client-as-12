import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const [reload, setIsReload] = useState(true);

  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/user/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [reload]);

  console.log(profile);

  const onSubmit = (userdata) => {
    console.log("data", userdata);
    const email = user?.email;
    const url = `http://localhost:5000/user/${email}`;
    console.log(url);
   
  };

  // useEffect(() => {
  //   const getToken = async () => {
  //     if (email) {
  //       fetch(`http://localhost:5000/user/${email}`, {
  //         method: "PUT",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(currentUser),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("data inside useToken", data);
  //           const accessToken = data.token;
  //           localStorage.setItem("accessToken", accessToken);
  //           setToken(accessToken);
  //         });
  //     }
  //   };
  //   getToken();
  // }, [user]);

  return (
    <div className="container mx-auto my-5 pb-5">
      {console.log(user)}
      <h3 className="py-3 text-success fs-1 pb-5  text-center fw-bold">
        Your Profile
      </h3>

      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="d-flex justify-content-center">
            <img
              style={{ height: "170px", width: "170px", borderRadius: "50%" }}
              src={user.photoURL}
              alt=""
            />
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2" className="my-4">
            <div className=" d-flex align-items-center justify-content-center">
              <div>
                <h2>{user.displayName}</h2>
                <h5>{profile.email}</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="d-flex justify-content-center mb-3 profile-container py-2">
        <div className=""></div>
        <div className=" d-flex justify-content-center align-items-center"></div>
      </div>
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
