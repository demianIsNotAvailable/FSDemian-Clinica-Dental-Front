import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateUserCall } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "../Register/Register.css";

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
  };

  const editHandler = () => {
    console.log(data, userReduxData.credentials.token, "patata")
    updateUserCall(data, userReduxData.credentials.token)
      .then(() => {
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="registerDesign">
      <div className="registerFormContainer">

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">phone number</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            type={"text"}
            className={"basicInput"}
            placeholder={userReduxData.credentials.user.phone}
            name={"phone"}
            onChange={(e) => inputHandler(e)}
          />
        </InputGroup>
        <Form.Label htmlFor="basic-url">
          These will be your login credentials:
        </Form.Label>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            type={"email"}
            className={"basicInput"}
            placeholder={userReduxData.credentials.user.email}
            name={"email"}
            onChange={(e) => inputHandler(e)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">password</InputGroup.Text>
          <Form.Control
            type={"password"}
            className={"basicInput"}
            placeholder={"********"}
            name={"password"}
            onChange={(e) => inputHandler(e)}
          />
        </InputGroup>
        <button className="registerButtonDesign" onClick={editHandler}>
          Update
        </button>
      </div>
    </div>
  );
};
