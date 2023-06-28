import React from "react";
import topbar from "../assets/img/TopBar.png";
import logo from "../assets/img/Logo.png";
import sidebar from "../assets/img/SideBar.png";
import bank from "../assets/img/Bank.png";
import arrowleft from "../assets/img/ArrowLeft.png";
import line from "../assets/img/Line.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper, StepLabel, Step } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getData, setSecuritydata } from "../Utils/common";


export default function SecurityQuestions() {
  const [activeStep] = React.useState(3);

  const [objData, setObjData] = useState({});

  const navigate = useNavigate();

  function backhandleClick() {
    navigate("/KYC");
  }

  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  useEffect(() => {
    // console.log();
    // const myClass: HTMLInputElement | null = document.querySelector("." + location.pathname.slice(1)) as HTMLInputElement;

    // if (myClass) {
    //     myClass.id = "active";
    // }
    const val = getData();
    setObjData(val);

    // document.querySelector("." + location.pathname.slice(1)).id = "active";
    console.log();
  }, [currentPage]);

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data:any) => {
    console.log("data", data);

    setSecuritydata(data);
    const val = getData();
    setObjData(val);
    navigate("/SummaryPage", { state: data });
  };

  console.log(errors);

  return (
    <div>
     
       
        

      
      <button className="backArrow">
        <img width="100%" className="backArrow-img" src={arrowleft} />
      </button>
      <img className="bank" src={bank} />
      <div>
        <button className="backArrow">
          <img
            width="100%"
            className="backArrow-img"
            src={arrowleft}
            onClick={backhandleClick}
          />
        </button>
        <h1 className="heading">Set up security questions</h1>
        <p className="second">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry{" "}
        </p>

        <form
          className="ui"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div>
            <div>
              <label className="name1">
                <b>Question 1</b>
              </label>
              <div>
                <select
                  className="ques1"
                  {...register("Question1", {
                    required: "Question 1 is Required...",
                  })}
                >
                  <option value="">Select </option>

                  <option value="In what city were you born?">
                    In what city were you born?
                  </option>

                  <option value=" What was your favorite food as a child?">
                    What was your favorite food as a child?
                  </option>

                  <option value="Name of your favorite band or singer?">
                    Name of your favorite band or singer?
                  </option>
                </select>
              </div>
              <span
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "98%",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "157px",
                }}
                className="errors"
              >
                {errors.Question1?.message?.toString()}
              </span>
            </div>
            
  );
}
