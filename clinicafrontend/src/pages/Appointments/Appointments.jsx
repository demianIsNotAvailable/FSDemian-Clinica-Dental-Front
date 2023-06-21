import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { formatDate } from "../../services/functions";
import { bringAppointments } from "../../services/apiCalls";
import "./Appointments.css"

export const Appointments = () => {
  const navigate = useNavigate();
  const userReduxData = useSelector(userData);
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    if (!userReduxData.credentials.token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    bringAppointments(userReduxData.credentials)
      .then((res) => {
        res.data.forEach((appointment) => {
          appointment.date = formatDate(appointment.start).date;
          appointment.time = formatDate(appointment.start).time;
        });
        res.data.sort((a, b) => (a.start > b.start ? 1 : -1));
        setAppointmentList(res.data);
      })
      .catch((error) => console.error(error));
  }, []);



  return (
    <div className="appointmentsDesign">
     <h1>Your Appoinments</h1>
      <div className="appointmentContainerDesign">
        <>
          {appointmentList.map((app) => (
            <AppointmentCard
              key={app._id}
              client={app.client.email}
              doctor={app.doctor.lastname}
              date={app.date}
              time={app.time}
            />
          ))}
        </>
      </div>
      <div className="appButtonContainer">
      <button className="formContainerButtonDesign" id="appButton" onClick={() => navigate("/profileedit")}>New <br></br> Appointment</button>
      </div>
    </div>
  );
};
