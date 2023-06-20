import React from "react";
import axios from "axios";
import topbar from "../assets/img/TopBar.png";
import logo from "../assets/img/Logo.png";
import sidebar from "../assets/img/SideBar.png";
import bank from "../assets/img/Bank.png";
import line from "../assets/img/Line.png";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import arrowleft from "../assets/img/ArrowLeft.png";
import { useNavigate } from "react-router-dom";
import { Stepper, StepLabel, Step } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getData, setCustomerdata } from "../Utils/Common";

export default function CustomerIdentification() {
  const [activeStep, setActiveStep] = React.useState(1);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [objData, setObjData] = useState();

  const location = useLocation();
  const [firstData] = useState(location.state);
  const currentPage = location.pathname.slice(1);

  function backhandleSubmit() {
    navigate("/PersonalDetails", { state: firstData });
    console.log(firstData);
  }

  useEffect(() => {
    console.log();
    document.querySelector("." + location.pathname.slice(1)).id = "active";
    console.log();
    const val = getData();
    setObjData(val);
  }, [currentPage]);

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setCustomerdata(data);
    const val = getData();
    setObjData(val);
    navigate("/KYC", { state: data });
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
            <span>
              <img className="barcode-2" src={line} alt="vector" />
            </span>

            <div className="progress-bar-2">
              <Stepper
                style={{ width: "20%", height: "40%" }}
                orientation="vertical"
                activeStep={activeStep}
              >
                <Step className="step1">
                  <StepLabel className="labelstep">Personal Details</StepLabel>
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

      <div className="topbar">
        <img width="100%" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
      </div>
      <button className="backArrow">
        <img
          width="100%"
          className="backArrow-img"
          src={arrowleft}
          onClick={backhandleSubmit}
        />
      </button>
      <img className="bank" src={bank} />
      <div>
        <h1 className="heading">Customer Identification</h1>
        <p className="second">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry{" "}
        </p>
        <form
          className="set"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div>
            <label className="label-name">First name *</label>
            <input
              className="TextBox"
              type="text"
              {...register("firstName", {
                required: "FirstName is Required...",

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "FirstName cannot contain whitespace only.",
                },

                minLength: {
                  value: 3,

                  message: "FirstName must be atleast 3 characters long...",
                },

                maxLength: {
                  value: 15,

                  message: "FirstName must be atmost 15 characters long...",
                },
              })}
              defaultValue={objData?.firstName}
              placeholder="Enter"
            />
            <span
              style={{
                position: "absolute",
                left: "438px",
                top: "348px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.firstName?.message}
            </span>
          </div>

          <div>
            <label className="label-name-1">Last name *</label>
            <input
              className="TextBox-1"
              type="text"
              {...register("lastName", {
                required: "LastName is Required...",

                minLength: {
                  value: 1,

                  message: "LastName must be atleast 1 characters long...",
                },

                maxLength: {
                  value: 15,

                  message: "LastName must be atmost 15 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "LastName cannot contain whitespace only.",
                },
              })}
              defaultValue={objData?.lastName}
              placeholder="Enter"
            />
            <span
              style={{
                position: "absolute",
                left: "829px",
                top: "348px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.lastName?.message}
            </span>
          </div>

          <div>
            <label className="label-name-3">DOB *</label>
            <input
              className="TextBox-3"
              type="date"
              {...register("dob", {
                required: "DOB is Required...",
              })}
              defaultValue={objData?.dob}
              placeholder="MM/DD/YYYY"
            />

            <span
              style={{
                position: "absolute",
                left: "436px",
                top: "460px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.dob?.message}
            </span>
          </div>

          <div>
            <label className="label-name-4">Address Line1 *</label>
            <input
              className="TextBox-4"
              type="text"
              {...register("address1", {
                required: "AddressLine1 is Required...",

                minLength: {
                  value: 8,

                  message: "AddressLine1 must be atleast 8 characters long...",
                },

                maxLength: {
                  value: 25,

                  message: "AddressLine1 must be atmost 25 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "AddressLine1 cannot contain whitespace only.",
                },
              })}
              defaultValue={objData?.address1}
              placeholder="Enter"
            />
            <span
              style={{
                position: "absolute",
                left: "830px",
                top: "460px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.address1?.message}
            </span>
          </div>

          <div>
            <label className="label-name-5">Address Line2 *</label>
            <input
              className="TextBox-5"
              type="text"
              {...register("address2", {
                required: "AddressLine2 is Required...",

                minLength: {
                  value: 8,

                  message: "AddressLine2 must be atleast 8 characters long...",
                },

                maxLength: {
                  value: 25,

                  message: "AddressLine2 must be atmost 25 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Address2 cannot contain whitespace only.",
                },
              })}
              defaultValue={objData?.address2}
              placeholder="Enter"
            />
            <span
              style={{
                position: "absolute",
                left: "434px",
                top: "572px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.address2?.message}
            </span>
          </div>

          <div>
            <label className="label-name-6">State *</label>
            <div
              className="dropdown"
              style={{ position: "absolute", display: "contents" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 360,
                  top: 517,
                  left: 827,
                  height: 50,
                }}
              >
                <FormControl fullWidth>
                  <select
                    className="states"
                    value={selectedOption}
                    onChange={handleChange}
                    {...register("state", {
                      required: "State is Required...",
                    })}
                    defaultValue={objData?.state}
                  >
                    <option value="">Select </option>

                    <option value={"Tamilnadu"}>TamilNadu</option>

                    <option value={"Delhi"}>Delhi</option>

                    <option value={"Bangalore"}>Bangalore</option>
                  </select>
                </FormControl>
              </Box>
            </div>
            <span
              style={{
                position: "absolute",
                left: "830px",
                top: "571px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.state?.message}
            </span>
          </div>
          <div>
            <label className="label-name-7">City *</label>
            <div className="dropdown-1">
              <Box
                sx={{
                  position: "absolute",
                  width: 360,
                  top: 631,
                  left: 434,
                  background: "#F5F8FF",
                }}
              >
                <FormControl fullWidth>
                  <select
                    className="cities"
                    value={selectedOption}
                    onChange={handleChange}
                    {...register("city", {
                      required: "City is Required...",
                    })}
                    defaultValue={objData?.city}
                  >
                    <option value="">Select </option>

                    <option value="Channai">Chennai</option>

                    <option value="Salem">Salem</option>

                    <option value="Namakkal">Namakkal</option>
                  </select>
                </FormControl>
              </Box>
            </div>
            <span
              style={{
                position: "absolute",
                left: "434px",
                top: "685px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.city?.message}
            </span>
          </div>
          <div>
            <label className="label-name-8">ZIP/ Postcode * </label>
            <input
              className="TextBox-6"
              type="number"
              {...register("zipcode", {
                required: "Zipcode is Required...",

                minLength: {
                  value: 6,

                  message: "Zipcode must be atleast 6 characters long...",
                },

                maxLength: {
                  value: 6,

                  message: "Zipcode must be atmost 6 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Zipcode cannot contain whitespace only.",
                },
              })}
              defaultValue={objData?.zipcode}
              placeholder="Enter"
            />
            <span
              style={{
                position: "absolute",
                left: "831px",
                top: "685px",
                fontFamily: "auto",
                fontSize: "95%",
              }}
              className="errors"
            >
              {errors.zipcode?.message}
            </span>
          </div>

          <button className="next-btn">Next</button>
        </form>

        <div className="pagination-2">
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
  );
}
