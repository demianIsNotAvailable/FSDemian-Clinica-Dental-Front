import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { About } from "../About/About";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Admin } from "../Admin/Admin";
import { Appointments } from "../Appointments/Appointments";
import { ProfileEdit } from "../ProfileEdit/ProfileEdit";

export const Body = () => {

    return (

        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/appointments" element ={<Appointments />} />
                <Route path="/profileedit" element ={<ProfileEdit />} />
            </Routes>
        
        
        </>


    ) 
} 