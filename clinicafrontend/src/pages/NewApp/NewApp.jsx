import Form from "react-bootstrap/Form";
import { bringUsersByRole, sendAppointment } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { convertAppointment } from "../../services/functions";
import { appointmentData } from "../appointmentSlice";
import "./NewApp.css";

export const NewApp = () => {
  const navigate = useNavigate();
  const userReduxData = useSelector(userData);
  const appReduxData = useSelector(appointmentData)  
  const [doctors, setDoctors] = useState([]);
  const [clients, setClients] = useState ([])
  const [data, setData] = useState({
    client: userReduxData.credentials.id
  })

  useEffect(() => {
    if (!userReduxData.credentials.token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (appReduxData.data) {
        setData(appReduxData.data)
    }
}, [])


console.log(data)


  useEffect(() => {
    if (doctors.length === 0) {
      bringUsersByRole(userReduxData.credentials.token, "doctor")
        .then((res) => {
          setDoctors(res.data);
        })
        .catch((err) => console.error(err));
    }
    if (userReduxData.credentials.role === "ADMIN") {
        bringUsersByRole(userReduxData.credentials.token, "user")
        .then((res) => {
            setClients(res.data);
          })
          .catch((err) => console.error(err));
    }
  }, []);

  const inputHandler = (field) => {
    setData((prevState) => ({
      ...prevState,
      [field.target.name]: field.target.value,
    }));
    console.log(data)
  };


  const sendNewApp = () => {
    const submit = convertAppointment(data)
    console.log(submit, "soy sub")
    sendAppointment(submit, userReduxData.credentials.token)
    .then(() => {
        navigate("/appointments")
    })

  }


  return (
    <div className="newAppDesign">
      <div className="newAppFormContainer">
        <Form.Group>
          <Form.Label>Choose your Doctor</Form.Label>
          {doctors.length > 0 ? (
            <Form.Select name={"doctor"} onChange={(e) => inputHandler(e)}>
              {doctors.map((doc) => (
                <option key={doc._id} value={doc._id}>{doc.name}</option>
              ))}
            </Form.Select>
          ) : null}
        </Form.Group>

        {userReduxData.credentials.role === "ADMIN" ?(         
        <Form.Group>
          <Form.Label>Choose Client</Form.Label>
          {clients.length > 0 ? (
            <Form.Select name={"client"} onChange={(e) => inputHandler(e)}>
              {clients.map((client) => (
                <option key={client._id} value={client._id}>{client.email}</option>
              ))}
            </Form.Select>
          ) : null}
        </Form.Group>) : null}

        <Form.Group>
            <Form.Label>Choose your date</Form.Label>
            <Form.Control
              type="date"
              placeholder={""}
              name={"date"}
              min={new Date()}
              onChange={(e) => inputHandler(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Choose your time</Form.Label>
            <Form.Control
              type="time"
              name={"time"}
              onChange={(e) => inputHandler(e)}
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Choose intervention type</Form.Label>
            <Form.Select name={"duration"} onChange={(e) => inputHandler(e)}>
                <option value="30">type 1 (30 min.)</option>
                <option value="45">type 2 (45 min.)</option>
                <option value="60">type 3 (60min.)</option>
            </Form.Select>
        </Form.Group>
        <br></br>
        <button className="registerButtonDesign" onClick={sendNewApp}>Send</button>
      </div>
    </div>
  );
};
