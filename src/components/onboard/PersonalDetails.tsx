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

            
        </div>
      </div>
    </div>
  );
}
