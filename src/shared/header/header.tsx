import React from "react";
import "../../assets/css/header.css";
import topbar from "../../assets/img/TopBar.png"
import logo from "../../assets/img/Logo.png"


export default function Header (){
    return(
        <div className="topbar1">
        <img width="100%" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
      </div>
    )
}