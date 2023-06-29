import React from "react";
import bank from "../../assets/img/Bank.png";
import { useState, useEffect } from "react";
import arrowleft from "../../assets/img/ArrowLeft.png";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getData,setKycdata } from "../../Utils/common";
import Vector from "../../assets/img/Vector.png";
import close from "../../assets/img/close.png";
import Uploadicon from "../../assets/img/Uploadicon.png";



export default function KYC() {
  const [activeStep, setActiveStep] = React.useState(2);
  const navigate = useNavigate();
  const [objData, setObjData] = useState();

  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileSelected, setFileSelected] = useState<File>();

  function backhandleClick() {
    navigate("/CustomerIdentification");
  }
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleClearFile = () => {
    setSelectedFile(undefined);
  };

  const handleFileChange1 = (event: any) => {
    const file = event.target.files[0];
    setFileSelected(file);
    console.log(file);
  };

  const handleClearFile1 = () => {
    setFileSelected(undefined);
  };

  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  useEffect(() => {
    // console.log();
    // const myClass: HTMLInputElement | null = document.querySelector(
    //   "." + location.pathname.slice(1)
    // ) as HTMLInputElement;

    // if (myClass) {
    //   myClass.id = "active";
    // }
    const val = getData();
    // setObjData(val);

    // document.querySelector("." + location.pathname.slice(1)).id = "active";
    console.log();
  }, [currentPage]);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
    // setKycdata(data);
    // const val = getData();
    // setObjData(val);

    navigate("/SecurityQuestions", { state: data });
  };

  console.log(errors);

  return (
    <div>
    
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
          <div className="flexdata">
            <span>
              <div className="field">
                <label className="labelcont1">
                  <b>Id Proof </b>
                  <span className="mandate">*</span>
                </label>
                {/* <Dropdown />
                <Dropzone onDrop={onDrop} accept={"image/*"}></Dropzone> */}
                <select
                  className="idproof"
                  {...register("idproof", {
                    required: "Id Proof is Required...",
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
                  top: "115px",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "136px",
                }}
                className="errors"
              >
                {errors.idproof?.message?.toString()}
              </span>
            </span>

            <span>
              <div className="field">
                <label className="labelcont2">
                  <b>
                    Address Proof <span className="mandate">*</span>
                  </b>
                </label>

                <select
                  className="addressproof"
                  {...register("addressproof", {
                    required: "Address Proof is Required...",
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
                  left: "351%",
                  top: "115px",
                  fontFamily: "auto",
                  fontSize: "95%",
                  width: "146%",
                }}
                className="errors"
              >
                {errors.addressproof?.message?.toString()}
              </span>
            </span>
          </div>

          <div className="upload-box1">
            <label className="labelcont4">
              <b>
                Upload Address Proof <span className="mandate">*</span>
              </b>
            </label>

            {/* <label>Upload </label> */}
            {!fileSelected && (
              <p className="drag-drop-area">
                Drag and drop PDF, JEPG,PNG file or{" "}
                <span style={{ color: "blue" }}>Browse from computer</span>
                <img className="vector" src={Vector}></img>
              </p>
            )}

            <input
              className="upload-file1"
              type="file"
              {...register("uploadAddressProof", {
                required: "Upload Address Proof is Required...",
              })}
              onChange={handleFileChange1}
            />

            <span
              style={{
                position: "absolute",
                top: "109%",
                fontFamily: "auto",
                fontSize: "95%",
                width: "100%",
              }}
              className="errors"
            >
              {errors.uploadAddressProof?.message?.toString()}
            </span>

            {fileSelected && (
              <div>
                <img className="upload" src={Uploadicon}></img>
                <div>
                  <label className="file-name">{fileSelected.name}</label>
                </div>
                <img
                  className="remove-file"
                  src={close}
                  onClick={handleClearFile1}
                ></img>
              </div>
            )}
          </div>

          <div className="upload-box">
            <label className="labelcont3">
              <b>
                Upload Id Proof <span className="mandate">*</span>
              </b>
            </label>
            {!selectedFile && (
              <p className="drag-drop-area">
                Drag and drop PDF, JEPG,PNG file or{" "}
                <span style={{ color: "blue" }}>Browse from computer</span>
                <img className="vector" src={Vector}></img>
              </p>
            )}

            <input
              className="upload-file"
              type="file"
              {...register("uploadIdProof", {
                required: "Upload Id Proof is Required...",
              })}
              onChange={handleFileChange}
            />
            <span
              style={{
                position: "absolute",
                top: "109%",
                fontFamily: "auto",
                fontSize: "95%",
                width: "100%",
              }}
              className="errors"
            >
              {errors.uploadIdProof?.message?.toString()}
            </span>

            {selectedFile && (
              <div>
                <img className="upload" src={Uploadicon}></img>
                <div>
                  <label className="file-name">{selectedFile.name}</label>
                </div>
                <img
                  className="remove-file"
                  src={close}
                  onClick={handleClearFile}
                ></img>
              </div>
            )}
          </div>

          <button className="bt-2">Next</button>
        </form>
      </div>
    </div>
  );
}
