import React from "react";
import "../App.css";
import bank from "../assets/img/Bank.png";
import arrowleft from "../assets/img/ArrowLeft.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getData, setPersonaldata } from "../Utils/common";


export default function PersonalDetails() {
  const navigate = useNavigate();
 const [activeStep,setActiveStep]=React.useState(0);


  function backhandleClick() {
    navigate("/First");
  }
 

  const nextStep = () =>{
    if(activeStep < 4) setActiveStep ((currentStep)=> currentStep + 1);
  };


  const [objData, setObjData] = useState<{
    phoneNumber?: string;
    email?: string;
    aadharNumber?: string;
    panNumber?: string;
  }>();

  const location = useLocation();
  const [state] = useState(location.state || {});

  const currentPage = location.pathname.slice(1);

  useEffect(() => {
    // console.log();
    // const myClass: HTMLInputElement | null = document.querySelector(
    //   "." + location.pathname.slice(1)
    // ) as HTMLInputElement;

    // if (myClass) {
    //   myClass.id = "active";
    // }
    const val = getData();
    setObjData(val);
    console.log();
  }, [currentPage]);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    setPersonaldata(data);
    const val = getData();
    setObjData(val);
    navigate("/CustomerIdentification", { state: data });
  };

  console.log(errors);

  return (
    <div>
      <div>
      
       
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
                  required: "Mobile Number is Required...",

                  minLength: {
                    value: 10,

                    message: "Mobile Number must be atmost 10 characters long",
                  },

                  maxLength: {
                    value: 10,

                    message: "Mobile Number must be atmost 10 characters long",
                  },
                })}
                defaultValue={objData?.phoneNumber}
                placeholder="Enter Your Mobile Number"
              ></input>
              <input
                type="text"
                value="+91"
                className="disabled-input mobnum-field-1"
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
                {errors.mobileNumber?.message?.toString()}
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

                    message:
                      "Email must be valid and atmost 59 characters long...",
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
                {errors.email?.message?.toString()}
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
                  required: "Aadhar Number is Required...",

                  pattern: {
                    value: /^([0-9]){12}$/,

                    message: "Aadhar Number must be 12 character",
                  },
                })}
                defaultValue={objData?.aadharNumber}
                placeholder="X X X X  X X X X  X X X X  "
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
                {errors.aadharNumber?.message?.toString()}
              </span>
            </div>

            <div className="pan-number">
              <label className="pan-text">PAN (Personal Account Number)*</label>
              <input
                className="pan-field"
                {...register("panNumber", {
                  required: "PAN Number is Required...",

                  pattern: {
                    value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,

                    message: "PAN Number must be valid",
                  },
                })}
                defaultValue={objData?.panNumber}
                placeholder="X X X  X X X X  X X X "
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
                {errors.panNumber?.message?.toString()}
              </span>
            </div>

           
      </div>
    </div>
  );
}
