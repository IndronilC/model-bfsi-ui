import React from "react";
import bank from "../../assets/img/Bank.png";
import arrowleft from "../../assets/img/ArrowLeft.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getData, setPersonaldata } from "../../Utils/common";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [termsChecked, setTermsChecked] = useState(false);

  const handleTermsCheck = () => {
    setTermsChecked(!termsChecked);
  };

  function backhandleClick() {
    navigate("/First");
  }

  const [objData, setObjData] = useState<{
    phoneNumber?: string;
    email?: string;
    aadharNumber?: string;
    panNumber?: string;
  }>();

  useEffect(() => {
    const val = getData();
    setObjData(val);
    console.log();
  });

  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
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
                type="text"
                maxLength={10}
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
                onKeyPress={(event) => {
                  const keyCode = event.which || event.keyCode;
                  const keyValue = String.fromCharCode(keyCode);
                  const isValid = /^\d+$/.test(keyValue);
                  if (!isValid) {
                    event.preventDefault();
                  }
                }}
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
                type="text"
                maxLength={12}
                {...register("aadharNumber", {
                  required: "Aadhar Number is Required...",

                  pattern: {
                    value: /^([0-9]){12}$/,

                    message: "Aadhar Number must be 12 character",
                  },
                })}
                defaultValue={objData?.aadharNumber}
                placeholder="X X X X  X X X X  X X X X  "
                onKeyPress={(event) => {
                  const keyCode = event.which || event.keyCode;
                  const keyValue = String.fromCharCode(keyCode);
                  const isValid = /^\d+$/.test(keyValue);
                  if (!isValid) {
                    event.preventDefault();
                  }
                }}
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
                type="text"
                maxLength={10}
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

            <div className="checkbox-field">
              <input
                type="checkbox"
                className="checkbox"
                id="user"
                value="user"
                {...register("checkbox", {
                  required: "Checkbox Selection is Required...",
                })}
                disabled={!termsChecked}
              ></input>
              <label onClick={handleClickOpen} htmlFor="user" className="terms">
                I Agree with{" "}
                <a onClick={handleTermsCheck}>Terms and Conditions</a>
              </label>
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "78%",
                  fontFamily: "auto",
                  fontSize: "117%",
                  fontWeight: "500",
                  left: "0%",
                }}
                className="errors"
              >
                {errors.checkbox?.message?.toString()}
              </span>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Terms and Conditions"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    I hereby consent to receive and authorize the Bank and its
                    affiliates/ group companies to reach me/send any
                    communication pertaining to my Savings Account and related
                    services/facilities/special offers, or any other
                    relationship held by me with the Bank, or in relation to
                    various products, offers and services provided by Bank /its
                    group companies, through registered e-mail, phone, SMS,
                    WhatsApp messaging, or any other electronic mode or other
                    messaging or social media platforms. Bank will be sending
                    One Time Pin (OTP) on the above mentioned mobile number.
                    This consent will override any registration for DND/DNC
                    registered with Bank with respect to Saving Account/any
                    other relationship with Bank and any other
                    services/facilities/offers offered by Bank. I understand and
                    agree that the email provider /WhatsApp or any other service
                    provider can review/monitor the contents shared/communicated
                    through email provider/ WhatsApp or other service provider.
                    I understand that such electronic mode of communication(s)
                    are subject to the terms and conditions of the respective
                    service provider and agree to comply with the terms of use
                    of email/ WhatsApp, SMS, or any other electronic mode, as
                    applicable and updated/modified by the service provider from
                    time to time.
                  </DialogContentText>
                </DialogContent>
                <DialogActions></DialogActions>
              </Dialog>
            </div>
            <button
              type="submit"
              className="next-button-1"
              disabled={!isValid || !termsChecked}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
