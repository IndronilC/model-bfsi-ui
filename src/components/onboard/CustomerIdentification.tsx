import bank from "../../assets/img/Bank.png";
import arrowleft from "../../assets/img/ArrowLeft.png";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getData, setCustomerdata } from "../../Utils/common";

export default function CustomerIdentification() {
  const navigate = useNavigate();

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

  function backhandleSubmit() {
    navigate("/PersonalDetails");
  }

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
            <span className="errors firsterror">
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
            <span className="errors lasterror">
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

            <span className="errors doberror">
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
            <span className="errors add1error">
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
            <span className="errors add2error">
              {errors.address2?.message?.toString()}
            </span>
          </div>

          <div>
            <label className="label-name-6">State *</label>
            <div
              className="dropdown"
              style={{ position: "absolute", display: "contents" }}
            >
              <Box className="box1">
                <FormControl fullWidth>
                  <select
                    className="states"
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
            <span className="errors stateerror">
              {errors.state?.message?.toString()}
            </span>
          </div>
          <div>
            <label className="label-name-7">City *</label>
            <div className="dropdown-1">
              <Box className="box2">
                <FormControl fullWidth>
                  <select
                    className="cities"
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
            <span className="errors cityerror">
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
            <span className="errors pincodeerror">
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
