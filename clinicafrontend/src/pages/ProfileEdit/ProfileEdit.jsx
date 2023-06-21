import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateUserData } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { editData } from "../editSlice";
import "./profileEdit.css";
import { InputText } from "../../common/InputText/InputText";

export const ProfileEdit = () => {
  const navigate = useNavigate();
  const userReduxData = useSelector(userData);
  const editReduxData = useSelector(editData)


  useEffect(() => {
    if (!userReduxData.credentials.token) {
      navigate("/");
    }
  }, []);


  const [data, setData] = useState({
    id: userReduxData.credentials.id,
    phone: userReduxData.credentials.phone,
    email: userReduxData.credentials.email,
    password: "",
  });

  const [toEditData, setToEditData] = useState({
    id: editReduxData.data.id,
    phone: editReduxData.data.phone,
    email: editReduxData.data.email,
  })

  const inputHandler = (field) => {
    if (editReduxData.data.id) {
      setToEditData((prevState) => ({
        ...prevState,
        [field.target.name]: field.target.value,
      }))
      console.log(toEditData)
      console.log(userReduxData.credentials.id)

    }
    else {setData((prevState) => ({
        ...prevState,
        [field.target.name]: field.target.value,
      }));
      console.log(data)
    }
  };

  const editHandler = () => {
    updateUserData(data, userReduxData.credentials.token)
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
            type={"new phone"}
            className={"basicInput"}
            name={"phone"}
            handler={(e) => inputHandler(e)}
        />

        <InputText
            type={"new email"}
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
