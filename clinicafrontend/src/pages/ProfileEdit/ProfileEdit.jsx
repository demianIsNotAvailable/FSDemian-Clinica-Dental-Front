import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateUserCall } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./profileEdit.css";
import { InputText } from "../../common/InputText/InputText";

export const ProfileEdit = () => {
  const navigate = useNavigate();
  const userReduxData = useSelector(userData);

  useEffect(() => {
    if (!userReduxData.credentials.token) {
      navigate("/");
    }
  }, []);

  const [data, setData] = useState({
    phone: userReduxData.credentials.user.phone,
    email: userReduxData.credentials.user.email,
    password: "",
  });

  const inputHandler = (field) => {
    setData((prevState) => ({
      ...prevState,
      [field.target.name]: field.target.value,
    }));
    console.log(data)
  };

  const editHandler = () => {
    updateUserCall(data, userReduxData.credentials.token)
      .then(() => {
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="profileEditDesign">
      <div className="formContainerContainer">
        <InputText
            type={"phone"}
            className={"basicInput"}
            name={"phone"}
            handler={(e) => inputHandler(e)}
        />

        <InputText
            type={"email"}
            className={"basicInput"}
            name={"email"}
            handler={(e) => inputHandler(e)}
        />
        <InputText
            type={"password"}
            className={"basicInput"}
            name={"password"}
            handler={(e) => inputHandler(e)}
        />
        <button className="formContainerButtonDesign" onClick={editHandler}>
          Update
        </button>
      </div>
    </div>
  );
};
