import React from "react";
import topbar from "../assets/img/TopBar.png";
import logo from "../assets/img/Logo.png";
import sidebar from "../assets/img/SideBar.png";
import bank from "../assets/img/Bank.png";
import line from "../assets/img/Line.png";
import { useState, useEffect } from "react";
import arrowleft from "../assets/img/ArrowLeft.png";
import Dropdown from "./Dropdown";
import { useCallback } from "react";
import Dropzone from "./Dropzone";
import { useNavigate } from "react-router-dom";
import { Stepper, StepLabel, Step } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getData, setCustomerdata, setKycdata } from "../Utils/Common";

export default function KYC() {
  const [activeStep, setActiveStep] = React.useState(2);
  const navigate = useNavigate();
  const [objData, setObjData] = useState();

  function backhandleClick() {
    navigate("/CustomerIdentification");
  }

  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  useEffect(() => {
    document.querySelector("." + location.pathname.slice(1)).id = "active";
    const val = getData();
    setObjData(val);
  }, [currentPage]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setKycdata(data);
    const val = getData();
    setObjData(val);

    navigate("/SecurityQuestions", { state: data });
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
                 
                <img className="barcode-3" src={line} alt="vector" />       
              </span>
              <div className="progress-bar-3">
                <Stepper
                  style={{ width: "20%", height: "40%" }}
                  orientation="vertical"
                  activeStep={activeStep}
                >
                  <Step className="step1">
                    <StepLabel className="labelstep">
                      Personal Details
                    </StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="labelstep">
                      Customer Identification
                    </StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="labelstep">KYC</StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="labelstep">
                      Security Questions
                    </StepLabel>
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
      </div>

      <div className="topbar">
        <img width="100%" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
      </div>

      <img className="bank" src={bank} />
      <div>
        <button className="arrow-left-1">
          <img src={arrowleft} alt="arrow-left" onClick={backhandleClick} />
        </button>
        <h1 className="heading"> KYC </h1>
        <p className="second">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <form
          className="fourth"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div class="flexdata">
            <span>
              <div className="field">
                <label class="labelcont1">
                  <b>Upload Id Proof </b>
                  <span class="mandate">*</span>
                </label>
                <Dropdown />
                <Dropzone onDrop={onDrop} accept={"image/*"}></Dropzone>
                <select
                  className="idproof"
                  {...register("idproof", {
                    required: "IdProof is Required...",
                  })}
                >
                  <option value="">Select </option>

                  <option value="1">AadharCard</option>

                  <option value="2">PanCard</option>

                  <option value="3">VoterId</option>
                </select>
              </div>
              <span
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "246px",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "136px",
                }}
                className="errors"
              >
                {errors.idproof?.message}
              </span>
            </span>

            <span>
              <div className="field">
                <label class="labelcont2">
                  <b>
                    Upload Address Proof <span class="mandate">*</span>
                  </b>
                </label>

                <select
                  className="addressproof"
                  {...register("addressproof", {
                    required: "AddressProof is Required...",
                  })}
                >
                  <option value="">Select </option>

                  <option value="1">AadharCard</option>

                  <option value="2">PanCard</option>

                  <option value="3">VoterId</option>
                </select>
              </div>
              <span
                style={{
                  position: "absolute",
                  left: "447px",
                  top: "246px",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "100%",
                }}
                className="errors"
              >
                {errors.addressproof?.message}
              </span>
            </span>
          </div>

          <button className="bt-2">Next</button>
        </form>

        <div>
          <div className="pagination-3">
            <button className="pagination-btn">
              <span className="PersonalDetails" id=""></span>
            </button>
            <button className="pagination-btn">
              <span className="CustomerIdentification" id=""></span>
            </button>
            <button className="pagination-btn">
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
