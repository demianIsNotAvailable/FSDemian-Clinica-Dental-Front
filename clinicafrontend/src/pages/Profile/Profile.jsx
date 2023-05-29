import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { profileCall } from "../../services/apiCalls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css";

export const Profile = () => {
  const navigate = useNavigate();
  const userReduxData = useSelector(userData);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    if (!userReduxData.credentials.token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    profileCall(userReduxData.credentials)
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(profileData);
  return (
    <div className="profileDesign">
      <div className="profileContainerDesign">
        <h1>User details:</h1>
        {profileData.name !== "" ? (
          <div className="profileContainerDeisgn2">
            <div>Name: {profileData.name}</div>
            <div>Lastname: {profileData.lastname}</div>
            <div>Email: {profileData.email}</div>
            <div>Phone number: {profileData.phone}</div>
            <div className="loginButtonDesign">Edit</div>
          </div>
        ) : (
          <div>CARGANDO</div>
        )}
      </div>
    </div>
  );
};
