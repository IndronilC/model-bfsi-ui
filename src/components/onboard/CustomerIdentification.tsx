import React from "react";
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
import { getData, setCustomerdata } from '../';

export default function CustomerIdentification() {
  const [activeStep, setActiveStep] = React.useState(1);

  const nextStep = () =>{
    if(activeStep < 4) setActiveStep ((currentStep)=> currentStep + 1);
  };
  const navigate = useNavigate();

  const [city, setCity] = useState();
  const [state, setState] = useState();

  const handlecityChange = (event: any) => {
    setCity(event.target.value);
  };
  const handlestateChange = (event: any) => {
    setState(event.target.value);
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
    // console.log();
    // const myClass: HTMLInputElement | null = document.querySelector(
    //   "." + location.pathname.slice(1)
    // ) as HTMLInputElement;

    // if (myClass) {
    //   myClass.id = "active";
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

                  message: "Last Name must be atmost 15 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Last Name cannot contain whitespace only.",
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
                    // onChange={handlestateChange}
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
                    // onChange={handlecityChange}
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
              type="number"
              {...register("pincode", {
                required: "Pincode is Required...",

                minLength: {
                  value: 6,

                  message: "Pincode must be atleast 6 characters long...",
                },

                maxLength: {
                  value: 6,

                  message: "Pincode must be atmost 6 characters long...",
                },

                pattern: {
                  value: /^(?!\s*$).+/,
                  message: "Pincode cannot contain whitespace only.",
                },
              })}
              defaultValue={objData?.pincode}
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
              {errors.pincode?.message?.toString()}
            </span>
          </div>

          <button className="next-btn" onClick={nextStep}>Next</button>
        </form>
      </div>
    </div>
  );
}
