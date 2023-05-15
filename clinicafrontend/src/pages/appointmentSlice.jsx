import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
      data: {}
    },
    reducers: {
      addAppointment: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      removeAppointment: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
      
    }
    
});

//exporto las ACCIONES.....

//Exporto las acciones para el modo ESCRITURA
export const { addAppointment, removeAppointment } = appointmentSlice.actions;


//exporto el método para el modo LECTURA
export const appointmentData = (state) => state.detail;

export default appointmentSlice.reducer;