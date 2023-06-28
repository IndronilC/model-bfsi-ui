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
            <div>
              <label className="label1">
                <b>Answer 1</b>
              </label>
              <input
                className="ans1"
                type="text"
                {...register("Answer1", {
                  required: "Answer 1 is Required...",

                  minLength: {
                    value: 3,

                    message: "Your answer must be atleast 3 characters long...",
                  },

                  maxLength: {
                    value: 50,

                    message: "Your answer must be atmost 50 characters long...",
                  },

                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: "Your answer cannot contain whitespace only.",
                  },
                })}
                placeholder="Enter your answer"
              />
              <span
                style={{
                  position: "absolute",
                  left: "27%",
                  top: "98%",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "300px",
                }}
                className="errors"
              >
                {errors.Answer1?.message?.toString()}
              </span>
            </div>
          </div>
          <br />
          <div>
            <div>
              <label className="name2">
                <b>Question 2</b>
              </label>
              <div>
                <select
                  className="ques2"
                  {...register("Question2", {
                    required: "Question 2 is Required...",
                  })}
                >
                  <option value="">Select </option>

                  <option disabled={true} value="In what city were you born?">
                    In what city were you born?
                  </option>

                  <option value="   What was your favorite food as a child?">
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
                  top: "192%",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "155px",
                }}
                className="errors"
              >
                {errors.Question2?.message?.toString()}
              </span>
            </div>
            <div>
              <label className="label2">
                <b>Answer 2</b>
              </label>
              <input
                className="ans2"
                type="text"
                {...register("Answer2", {
                  required: "Answer 2 is Required...",

                  minLength: {
                    value: 3,

                    message: "Your answer must be atleast 3 characters long...",
                  },

                  maxLength: {
                    value: 50,

                    message: "Your answer must be atmost 50 characters long...",
                  },

                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: "Your answer cannot contain whitespace only.",
                  },
                })}
                placeholder="Enter your answer"
              />
              <span
                style={{
                  position: "absolute",
                  left: "27%",
                  top: "192%",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "300px",
                }}
                className="errors"
              >
                {errors.Answer2?.message?.toString()}
              </span>
            </div>
          </div>
          <br />
          <div>
            <div>
              <label className="name3">
                <b>Question 3</b>
              </label>
              <div>
                <select
                  className="ques3"
                  {...register("Question3", {
                    required: "Question 3 is Required...",
                  })}
                >
                  <option value="">Select </option>

                  <option disabled={true} value="In what city were you born?">
                    In what city were you born?
                  </option>

                  <option
                    disabled={true}
                    value=" What was your favorite food as a child?"
                  >
                    What was your favorite food as a child?
                  </option>

                  <option value=" Name of your favorite band or singer?">
                    Name of your favorite band or singer?
                  </option>
                </select>
              </div>
              <span
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "292%",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "155px",
                }}
                className="errors"
              >
                {errors.Question3?.message?.toString()}
              </span>
            </div>
            <div>
              <label className="label3">
                <b>Answer 3</b>
              </label>
              <input
                className="ans3"
                type="text"
                {...register("Answer3", {
                  required: "Answer 3 is Required...",

                  minLength: {
                    value: 3,

                    message: "Your answer must be atleast 3 characters long...",
                  },

                  maxLength: {
                    value: 50,

                    message: "Your answer must be atmost 50 characters long...",
                  },

                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: " Your answer cannot contain whitespace only.",
                  },
                })}
                placeholder="Enter your answer"
              />
              <span
                style={{
                  position: "absolute",
                  left: "27%",
                  top: "292%",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "300px",
                }}
                className="errors"
              >
                {errors.Answer3?.message?.toString()}
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />

         