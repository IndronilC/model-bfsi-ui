import React from "react";
import axios from "axios";
import topbar from "../assets/img/TopBar.png";
import logo from "../assets/img/Logo.png";
import sidebar from "../assets/img/SideBar.png";
import bank from "../assets/img/Bank.png";
import arrowleft from "../assets/img/ArrowLeft.png";
import line from "../assets/img/Line.png";
import { useState } from "react";
import "./stepper.css";
import { useNavigate } from "react-router-dom";
import { Stepper, StepLabel, Step, Autocomplete } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getData, setPersonaldata } from "../Utils/Common";



export default function PersonalDetails() {
  const navigate = useNavigate();

  function backhandleClick() {
    navigate("/First");
  }


  const [objData, setObjData] = useState();

  const location = useLocation();
  const [state] = useState(location.state || {});

  const previousData= useState(location.data);

  const currentPage = location.pathname.slice(1);

  const [activeStep, setActiveStep] = React.useState(0);
 

  useEffect(() => {
    console.log();
    document.querySelector("." + location.pathname.slice(1)).id = "active";
   const val=getData()
    setObjData(val);
    console.log("get"+val.email, val.pannumber);
  });

  const {
    register,
    handleSubmit,
    

    formState: { errors },
  } = useForm({
    mode: "all",
   
  });

  const onSubmit =(data) => {
    const {name,value}=data;
  
    setPersonaldata(data);
    const val = getData();
    setObjData(val);
    navigate("/CustomerIdentification", { state: data });
  };
  
  console.log(errors);

 

  return (
    
    <div>

      <div className="side">
        <span>
          <img width="100%" height="780px" src={sidebar} />
        </span>

        <div className="sideText">
          <p className="lefttext">
            Get your <text className="bold">Digital Savings Account</text> In 4
            simple steps
          </p>
          <div>
            <div>
              <span>
                 
                <img className="barcode-1" src={line} alt="vector" />       
              </span>
              <div className="progress-bar1">
                <Stepper
                  style={{ width: "20%", height: "40%" }}
                  orientation="vertical"
                  activeStep={activeStep}
                >
                  <Step className="step1">
                    <StepLabel className="items">Personal Details</StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="items">
                      Customer Identification
                    </StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="items">KYC</StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="items">Security Questions</StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>
                </Stepper>
              </div>
                               
            </div>
          </div>
        </div>

        <div className="topbar1">
          <img width="100%" src={topbar} alt="logo" />
          <img className="logo" src={logo} />
        </div>

        <img className="bank" src={bank} />
        <div className="details">
          <form
            className="personal-details"
            onSubmit={handleSubmit(onSubmit)}
            
            autoComplete="off"
            
          >
            <button className="arrow-left">
              <img src={arrowleft} alt="arrow-left" onClick={backhandleClick} />
            </button>

            <text className="personal-details-text">Personal Details</text>
            <text className="field-info">
              Let’s begin with some necessary information and get you started
            </text>

            <div className="mobile-number">
              <text className="mobnum-text">
                Enter mobile number linked with Aadhaar *
              </text>

              <input
                className="mobnum-field"
                type="number"
              
             
                {...register("mobileNumber", {
                  required: "MobileNumber is Required...",

                  minLength: {
                    value: 10,

                    message: "Mobile number must be atmost 10 characters long",
                  },

                  maxLength: {
                    value: 10,

                    message: "Mobile number must be atmost 10 characters long",
                  },
                })}
                defaultValue={objData?.phoneNumber}
                placeholder="Enter Your Mobile Number"
              ></input>
              <input
                type="text"
                value="+91"
                class="disabled-input mobnum-field-1"
                disabled
              />
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "44%",
                  fontFamily: "auto",
                  fontSize: "115%",
                  left: "0%",
                  fontWeight: "500",
                }}
                className="errors"
              >
                {errors.mobileNumber?.message}
              </span>
            </div>

            <div className="email">
              <text className="email-text">
                Registered/Personal e-mail address *
              </text>

              <input
                className="email-field"
                {...register("email", {
                  required: "Email is Required...",
                   
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                    message: "Email must be valid",
                  },
  
                  maxLength: {
                    value: 59,
  
                    message: "Email must be atmost 59 characters long...",
                  },
                })}
                placeholder="Max 59 characters allowed"
                defaultValue={objData?.email}
              ></input>

              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "63%",
                  fontFamily: "auto",
                  fontSize: "115%",
                  left: "0%",
                  fontWeight: "500",
                }}
                className="errors"
              >
                {errors.email?.message}
              </span>
            </div>

            <div className="AadharNumber">
              <text className="AadharNumber-text">
                Enter Your Aadhar Number *
              </text>

              <input
                className="AadharNumber-field"
                type="number"
                {...register("aadharNumber", {
                  required: "AadharNumber is Required...",

                  pattern: {
                    value: /^([0-9]){12}$/,

                    message: "AadharNumber must be 12 character",
                  },
                })}
                placeholder="X X X X  X X X X  X X X X  "
                defaultValue={objData?.aadharNumber}
              ></input>

              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "83%",
                  fontFamily: "auto",
                  fontSize: "115%",
                  left: "0%",
                  fontWeight: "500",
                }}
                className="errors"
              >
                {errors.aadharNumber?.message}
              </span>
            </div>

            <div className="pan-number">
              <label className="pan-text">PAN (Personal Account Number)*</label>
              <input
                className="pan-field"
                {...register("panNumber", {
                  required: "PanNumber is Required...",

                  pattern: {
                    value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,

                    message: "PanNumber must be valid",
                  },
                })}
                placeholder="X X X X  X X X X  X X X X  "
                defaultValue={objData?.panNumber}
              ></input>
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "103%",
                  fontFamily: "auto",
                  fontSize: "115%",
                  fontWeight: "500",
                  left: "0%",
                }}
                className="errors"
              >
                {errors.panNumber?.message}
              </span>
            </div>

            <div className="checkbox-field">
              <input
                type="checkbox"
                className="checkbox"
                id="user"
                name="user"
                value="user"
                required
              ></input>
              <label for="user" className="terms">
                I Agree with <a href="www.kanini.com">Terms and Conditions</a>
              </label>
            </div>

            <button type="submit" className="next-button-1">
              Next
            </button>
          </form>

          <div className="pagination">
            <button className="pagination-btn">
              <span className="PersonalDetails" id=""></span>
            </button>
            <button className="pagination-btn ">
              <span className="CustomerIdentification" id=""></span>
            </button>
            <button className="pagination-btn ">
              <span className="KYC" id=""></span>
            </button>
            <button className="pagination-btn">
              <span className="SecurityQuestions" id=""></span>
            </button>
          </div>
        </div>
      </div>
   
    </div>
  );
}
