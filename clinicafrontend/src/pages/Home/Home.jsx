import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css"


export const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    return (
        <div className="homeDesign">
            
            <img className="homeImgDesign" src="../../../images/homeImg.png"></img>
        </div>
    )
}