import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { addAppointment } from "../appointmentSlice";
import { formatDate } from "../../services/functions";
import { bringAppointments } from "../../services/apiCalls";
import "./Appointments.css"

export const Appointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userReduxData = useSelector(userData);
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    if (!userReduxData.credentials.token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    bringAppointments(userReduxData.credentials.token)
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


  const editHandler = (appData) => {
    const thisAppData = {
      id: appData._id,
      client: appData.client._id,
      doctor: appData.doctor._id,
      date: appData.date,
      time: appData.time
    }
    console.log(thisAppData, "this is dispatch")
    dispatch(addAppointment({data: thisAppData}))
    navigate("/newapp")
  }


  return (
    <div className="appointmentsDesign">
     <h1>Appoinments</h1>
      <div className="appointmentContainerDesign">
        <>
          {appointmentList.map((app) => (
            <AppointmentCard
              key={app._id}
              client={app.client.email}
              doctor={app.doctor.lastname}
              date={app.date}
              time={app.time}
              editHandler={() => editHandler(app)}
            />
          ))}
        </>
      </div>
      <div className="appButtonContainer">
      <button className="formContainerButtonDesign" id="appButton" onClick={() => navigate("/newapp")}>New <br></br> Appointment</button>
      </div>
    </div>
  );
};
