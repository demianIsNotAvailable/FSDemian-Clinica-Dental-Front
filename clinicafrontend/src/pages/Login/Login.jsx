import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { AppointmentModal } from "../../common/Modal/Modal";
import { login, userData } from "../userSlice";
import { loginCall } from "../../services/apiCalls";
import "./Login.css";

export const Login = () => {
  const dispatch = useDispatch();
  const userRdxData = useSelector(userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRdxData.credentials.token) {
      navigate("/");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (field) => {
    setCredentials((prevState) => ({
      ...prevState,
      [field.target.name]: field.target.value,
    }));
    console.log(credentials);
  };

  const loginHandler = () => {
    loginCall(credentials)
      .then((res) => {
        const decodedData = jwt_decode(res.data.token);
        const data = {
          token: res.data.token,
          user: decodedData,
        };
        dispatch(login({credentials: data}))

        setTimeout(() => {
          navigate("/")
        }, 2000)
      })
      .catch((error) => {});
  };

  return (
    <div className="loginDesign">
      <div className="loginDesignInner">
        <InputText
          type={"email"}
          className={"basicInput"}
          placeholder={""}
          name={"email"}
          handler={inputHandler}
        />

        <InputText
          type={"password"}
          className={"basicInput"}
          placeholder={""}
          name={"password"}
          handler={inputHandler}
        />
        <button className="loginButtonDesign" onClick={loginHandler}>
          Log me in!
        </button>
      </div>
    </div>
  );
};
