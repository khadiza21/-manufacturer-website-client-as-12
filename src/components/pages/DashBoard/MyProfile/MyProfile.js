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
    const url = `https://fathomless-plains-16450.herokuapp.com/user/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [reload]);

  console.log(profile);



  const onSubmit = (e) => {
    console.log(e);
    
    const email = user?.email;

    const edu = e.edu;
    const location = e.location;
    const linkedin = e.linkedin;
    const phone = e.phone;
  
    
    fetch(`https://fathomless-plains-16450.herokuapp.com/user/${email}`, {
      method: "PUT",
      body: JSON.stringify({
        edu,
        location,
        linkedin,
        phone,
      }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(edu, location, linkedin, phone);
        toast("Updated Profile!");
        console.log("success", data);
        reset();
      });
  };

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
                <h2>Name: {user.displayName}</h2>
                <h6>Email: {profile.email}</h6>
                <h5>Education: {profile.edu}</h5>
                <h6>Location: {profile.location}</h6>
                <p>Contact: {profile.phone}</p>
                <a
                className="btn btn-success text-light fw-bold btn-link text-decoration-none"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
            target="_blank"
            href={profile.linkedin}
          >
            Go To Live Site
          </a>
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
          name="email"
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
          name="edu"
          className="mb-3 py-2"
          placeholder=" Education"
          {...register("edu")}
        />
        <input
          required
          name="location"
          className="mb-3 py-2"
          placeholder=" Location(city/district)"
          {...register("location")}
        />
        <input
          required
          name="phone"
          className="mb-3 py-2"
          placeholder=" Phone Number"
          {...register("phone")}
        />
        <input
          required
          name="linkedin"
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
