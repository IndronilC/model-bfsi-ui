import React from "react";
import axios from "axios";
import topbar from "../assets/img/TopBar.png";
import logo from "../assets/img/Logo.png";
import sidebar from "../assets/img/SideBar.png";
import line from "../assets/img/Line.png";
import bank from "../assets/img/Bank.png";
import { useNavigate } from "react-router-dom";
import { Stepper, StepLabel, Step } from "@mui/material";
import edit from "../assets/img/Edit.png";
import downloadLogo from "../assets/img/Download.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
 import { getData } from "../Utils/common";
import * as XLSX from 'xlsx';
import {write} from 'xlsx';




export default function Summary() {
  const [details, setDetails] =  useState<{ fullName?: string, phoneNumber?:string,email?:string,panNumber?:string, aadharNumber?:string,dateOfBirth?:string,address?:string,idProof?:string,addressProof?:String,Question1?:String,Question2?:String,Question3?:String}>({});


  useEffect(() => {
    const val = getData();
    setDetails(val);
  });
   
  const handleExport = () => {
    // Convert object to SheetJS worksheet
    //const data = details;
    // const data = [{
    //   name: "thanaraj",
    //   age: 22
    // }]
    const worksheet = XLSX.utils.json_to_sheet([details]);

    // Create a workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convert workbook to Excel file
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'data.xlsx';

    if ((navigator as any).msSaveBlob) {
      // For Internet Explorer
      (navigator as any).msSaveBlob(blob, fileName);
    } else {
      // For other browsers
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };


  const [activeStep, setActiveStep] = React.useState(4);

  const navigate = useNavigate();

  function handleClick() {
    axios.post("http://localhost:9191/customer/createCustomer", details);
    navigate("/Final");
  }

  function handleeditClick() {
    navigate("/PersonalDetails");
  }

  const nextStep = () => {
    if (activeStep < 0) setActiveStep((currentStep) => currentStep + 1);
  };

  function handleeditClick2() {
    navigate("/CustomerIdentification");
  }

  function handleeditClick3() {
    navigate("/KYC");
  }

  function handleeditClick4() {
    navigate("/SecurityQuestions");
  }

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
            <span>
              <img className="barcode-5" src={line} alt="vector" />
            </span>

            <div className="progress-bar-5">
              <Stepper
                style={{ width: "20%", height: "40%" }}
                orientation="vertical"
                activeStep={activeStep}
              >
                <Step className="step1">
                  <StepLabel className="labelstep">Personal Details</StepLabel>
                  <button className="edit-1">
                    <img src={edit} alt="edit" onClick={handleeditClick} />
                  </button>
                  <p className="progressbartext">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Step>

                <Step className="step1">
                  <StepLabel className="labelstep">
                    Customer Identification
                  </StepLabel>
                  <button className="edit-2">
                    <img src={edit} alt="edit" onClick={handleeditClick2} />
                  </button>
                  <p className="progressbartext">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Step>

                <Step className="step1">
                  <StepLabel className="labelstep">KYC</StepLabel>
                  <button className="edit-3">
                    <img src={edit} alt="edit" onClick={handleeditClick3} />
                  </button>
                  <p className="progressbartext">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Step>

                <Step className="step1">
                  <StepLabel className="labelstep">
                    Security Questions
                  </StepLabel>
                  <button className="edit-4">
                    <img src={edit} alt="edit" onClick={handleeditClick4} />
                  </button>
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

      <div className="topbar">
        <img width="100%" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
      </div>
      <img className="bank" src={bank} />
      <div>
        <h1 className="upper"> Summary </h1>
        <p className="upper-1">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry{" "}
        </p>

        