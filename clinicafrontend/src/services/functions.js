import moment from "moment/moment";


export const formatDate = (isoString) => {
    const date = new Date(isoString);
    
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
    const year = date.getUTCFullYear();
  
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  
    return {
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}`
    };
  }


  export const convertAppointment = (appointment) => {
    const start = moment(`${appointment.date} ${appointment.time}`, "YYYY-MM-DD HH:mm");
    const end = moment(start).add(appointment.duration, 'minutes');
  
    const startISO = start.toISOString();
    const endISO = end.toISOString();
  
    return {
      client: appointment.client,
      doctor: appointment.doctor,
      start: startISO,
      end: endISO,
    };
  };