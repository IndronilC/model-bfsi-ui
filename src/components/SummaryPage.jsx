import React from "react";
import axios from "axios";
import topbar from "../assets/img/TopBar.png";
import logo from "../assets/img/Logo.png";
import sidebar from "../assets/img/SideBar.png";
import line from "../assets/img/Line.png";
import bank from "../assets/img/Bank.png";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stepper, StepLabel, Step } from "@mui/material";
import edit from "../assets/img/Edit.png";
import downloadLogo from "../assets/img/Download.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../Utils/Common";

function createData(name, calories) {
  return { name, calories };
}

export default function Summary() {
  const [details, setDetails] = useState();

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input")], {
      type: "text/plain;charset=utf-8}",
    });
    element.href = "./Files/one.csv";
    element.download = "one.csv";
    element.click();
  };

  useEffect(() => {
    const val = getData();
    setDetails(val);
  });

  const rows = [
    createData("Name", details?.fullName),
    createData("Mobile Number", details?.phoneNumber),
    createData("PAN", details?.panNumber),
    createData("Email ID", details?.email),
    createData("Aadhaar number", details?.aadharNumber),
    createData("DOB", details?.dateOfBirth),
    createData("Address", details?.address),
    createData("ID Proof", "filename here.PDF"),
    createData("Address Proof", "filename here.PDF"),
    createData("Security question 1", details?.Question1),
    createData("Security question 2", details?.Question2),
    createData("Security question 3", details?.Question3),
  ];

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

        <div>
          <button className="download" onClick={downloadTxtFile}>
            <img src={downloadLogo} alt="down" />
            <span className="file">Export&nbsp;XLS</span>
          </button>
        </div>

        <div className="table">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <button className="sub" onClick={handleClick || (() => nextStep())}>
          Submit
        </button>
      </div>
    </div>
  );
}
