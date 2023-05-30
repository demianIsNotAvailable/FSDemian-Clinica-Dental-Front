import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { profileCall } from "../../services/apiCalls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css";
import '../../common/FormContainer/FormContainer.css'
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
  return (
    <div className="profileDesign">
        {profileData.name !== "" ? (
          <div className="formContainerContainer">
            <h1>Your info:</h1>
            <br></br>
            <h6>Name</h6>
            <h4>{profileData.name}</h4>
            <h6>Lastname</h6>
            <h4>{profileData.lastname}</h4>
            <h6>Email</h6>
            <h4>{profileData.email}</h4>
            <h6>Phone</h6>
            <h4>{profileData.phone}</h4>
            <button className="formContainerButtonDesign" onClick={() => navigate("/profileedit")}
            >
              Edit
            </button>
          </div>
        ) : (
          <div>CARGANDO</div>
        )}
    </div>
  ); 
};
