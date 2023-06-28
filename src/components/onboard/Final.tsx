import React from "react";
import success from '../assets/img/Success.png'
import Header from "../../shared/header/header";
import { useNavigate } from "react-router-dom";




export default function Final(){

    const navigate = useNavigate();

  function handleClick() {
    navigate("/First");
  }
    return(
        <div>
       <Header/>

       <img className="success" src={success} />
       
       <h3 className="wish ">Thank you</h3>
       <p className="message">Your Submission has been received. Please check your email and SMS for confirmation. </p>
       <button className="ok-btn" onClick={handleClick} >OK</button>
       </div>

       
    )
}