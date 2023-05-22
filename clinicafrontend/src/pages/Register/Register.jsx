import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginCall, registerCall } from "../../services/apiCalls";
import { login, userData } from "../userSlice";
import "./Register.css";


export const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userReduxData = useSelector(userData)

  useEffect(()=>{
    if(userReduxData.credentials.token){
      navigate("/")
    };
  },[]);



  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const inputHandler = (field) => {
    setData((prevState) => ({
      ...prevState,
      [field.target.name]: field.target.value,
    }));
    console.log(data);
  };

  const registerHandler = () => {
    registerCall(data)
      .then((res) => {
        const credentials = {
          email: data.email,
          password: data.password
        }
        loginCall(credentials)

      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="registerDesign">
      <div className="registerFormContainer">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">name</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            type={"text"}
            className={"basicInput"}
            placeholder={""}
            name={"name"}
            onChange={(e) => inputHandler(e)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            type={"text"}
            className={"basicInput"}
            placeholder={""}
            name={"lastname"}
            onChange={(e) => inputHandler(e)}
          />
          <InputGroup.Text id="basic-addon2">lastname</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">phone number</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            type={"text"}
            className={"basicInput"}
            placeholder={""}
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
            placeholder={""}
            name={"email"}
            onChange={(e) => inputHandler(e)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">password</InputGroup.Text>
          <Form.Control
            type={"password"}
            className={"basicInput"}
            placeholder={""}
            name={"password"}
            onChange={(e) => inputHandler(e)}
          />

        </InputGroup>
        <button className="registerButtonDesign" onClick={registerHandler}>
            Log me in!
          </button>
      </div>
    </div>
  );
};
