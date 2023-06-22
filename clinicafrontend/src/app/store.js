import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userSlice from '../pages/userSlice';
import editSlice from '../pages/editSlice';
import appointmentSlice from '../pages/appointmentSlice';


const reducers = combineReducers({
    edit: editSlice,
    user: userSlice,
    appointment: appointmentSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});