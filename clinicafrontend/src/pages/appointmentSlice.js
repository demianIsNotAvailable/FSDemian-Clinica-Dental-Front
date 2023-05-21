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


export const { addAppointment, removeAppointment } = appointmentSlice.actions;


export const appointmentData = (state) => state.detail;

export default appointmentSlice.reducer;