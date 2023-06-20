import React from "react";
import topbar from '../assets/img/TopBar.png'
import logo from '../assets/img/Logo.png'
import success from '../assets/img/Success.png'

export default function Final(){
    return(
        <div>
        <div className="topbar">
        <img width="100%" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
        </div>
      
       <img className="success" src={success} />
       
       <h3 className="wish ">Thank you</h3>
       <p className="message">Your Submission has been received. Please check </p>
       <p className="message-1">your email and SMS for confirmation.</p>

       <button className="ok-btn">OK</button>
       </div>

       
    )
}