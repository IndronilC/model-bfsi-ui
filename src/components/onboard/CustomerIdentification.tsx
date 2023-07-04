import React, { Fragment } from "react";
import bank from "../../assets/img/Bank.png";
import arrowleft from "../../assets/img/ArrowLeft.png";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper, StepLabel, Step } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { getData, setCustomerdata } from "../../Utils/common";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, Button } from "@material-ui/core";

export default function CustomerIdentification() {
  const navigate = useNavigate();

  const [city, setCity] = useState();
  const [state, setState] = useState();

  const handleFirstNameChange = (event: any) => {
    event.target.value = event.target.value.replace(/[0-9]/g, "");
  };

  const handleLastNameChange = (event: any) => {
    event.target.value = event.target.value.replace(/[0-9]/g, "");
  };
  const [objData, setObjData] = useState<{
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    pincode?: string;
  }>({});

  const location = useLocation();
  const [firstData] = useState(location.state);
  const currentPage = location.pathname.slice(1);

  function backhandleSubmit() {
    navigate("/PersonalDetails", { state: firstData });
    console.log(firstData);
  }

  useEffect(() => {
    const val = getData();
    setObjData(val);
    console.log();
  });

  const {
    register,
    control,

    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
    setCustomerdata(data);
    const val = getData();
    setObjData(val);
    navigate("/KYC", { state: data });
  };

  console.log(errors);

  return (
    <div>
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
            <label className="label-name">First Name *</label>
            <input
              className="TextBox"
              type="text"
              {...register("firstName", {
                required: "First Name is Required...",

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "First Name cannot contain whitespace only.",
                },

                minLength: {
                  value: 3,

                  message: "First Name must be atleast 3 characters long...",
                },

                maxLength: {
                  value: 15,

                  message: "First Name must be atmost 15 characters long...",
                },
              })}
              defaultValue={objData?.firstName}
              placeholder="Enter"
              onChange={handleFirstNameChange}
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
              {errors.firstName?.message?.toString()}
            </span>
          </div>

          <div>
            <label className="label-name-1">Last Name *</label>
            <input
              className="TextBox-1"
              type="text"
              {...register("lastName", {
                required: "Last Name is Required...",

                minLength: {
                  value: 1,

                  message: "Last Name must be atleast 1 characters long...",
                },

                maxLength: {
                  value: 15,

                  message: "Last Name must be atmost 8 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Last Name cannot contain whitespace only.",
                },
              })}
              defaultValue={objData?.lastName}
              placeholder="Enter"
              onChange={handleLastNameChange}
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
              {errors.lastName?.message?.toString()}
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
              defaultValue={objData?.dateOfBirth}
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
              {errors.dob?.message?.toString()}
            </span>
          </div>

          <div>
            <label className="label-name-4">Address Line1 *</label>
            <input
              className="TextBox-4"
              type="text"
              {...register("address1", {
                required: "Address Line1 is Required...",

                minLength: {
                  value: 8,

                  message: "Address Line1 must be atleast 8 characters long...",
                },

                maxLength: {
                  value: 25,

                  message: "Address Line1 must be atmost 25 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Address Line1 cannot contain whitespace only.",
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
              {errors.address1?.message?.toString()}
            </span>
          </div>

          <div>
            <label className="label-name-5">Address Line2 *</label>
            <input
              className="TextBox-5"
              type="text"
              {...register("address2", {
                required: "Address Line2 is Required...",

                minLength: {
                  value: 8,

                  message: "Address Line2 must be atleast 8 characters long...",
                },

                maxLength: {
                  value: 25,

                  message: "Address Line2 must be atmost 25 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Address Line2 cannot contain whitespace only.",
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
              {errors.address2?.message?.toString()}
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
                    value={state}
                    {...register("state", {
                      required: "State is Required...",
                    })}
                    defaultValue={objData?.state}
                  >
                    <option value="">Select </option>

                    <option value={"Tamilnadu"}>Tamil Nadu</option>

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
              {errors.state?.message?.toString()}
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
                    value={city}
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
              {errors.city?.message?.toString()}
            </span>
          </div>
          <div>
            <label className="label-name-8">Pincode * </label>
            <input
              className="TextBox-6"
              type="text"
              maxLength={6}
              {...register("pincode", {
                required: "Pincode is Required...",
                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Pincode cannot contain whitespace only.",
                },
                minLength: {
                  value: 6,

                  message: "Pincode must be 6 numbers...",
                },
              })}
              defaultValue={objData?.pincode}
              placeholder="Enter"
              onKeyPress={(event) => {
                const keyCode = event.which || event.keyCode;
                const keyValue = String.fromCharCode(keyCode);
                const isValid = /^\d+$/.test(keyValue);
                if (!isValid) {
                  event.preventDefault();
                }
              }}
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
              {errors.pincode?.message?.toString()}
            </span>
          </div>

          <button className="next-btn" disabled={!isValid}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
