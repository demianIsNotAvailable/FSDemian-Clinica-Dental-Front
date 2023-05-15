import React, { useState, useEffect } from "react";
import "./Login.css";
import { InputText } from "../../common/InputText/InputText";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

//Conexion a redux en modo escritura......
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {


  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const inputHandlerFunction = (field) => {
    setCredentials((prevState) => ({
      ...prevState,
      [field.target.name]: field.target.value,
    }));
    console.log(credentials)
  };

  return (
    <div className="loginDesign">
      <div>
        <InputText
          type={"email"}
          className={"basicInput"}
          placeholder={""}
          name={"email"}
          handler={inputHandlerFunction}
        />

        <InputText
          type={"password"}
          className={"basicInput"}
          placeholder={""}
          name={"password"}
          handler={inputHandlerFunction}
        />

        <div className="loginButtonDesign" onClick={() => logMeFunction()}>
          Login!
        </div>
      </div>
    </div>
  );
};
