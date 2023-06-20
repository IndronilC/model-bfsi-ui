import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import vectorUpload from '../assets/img/VectorUpload.png'

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div {...getRootProps()}>
      <div className="dropzone-wrap">
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
      <img src={vectorUpload} alt="Mambu"></img>
        {isDragActive ? (
          <p className="dropzone-contet">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
          Drag and drop PDF, JEPG,PNG file or <p className="browseco">Browse from computer</p>
          </p>
        )}
      </div>
      </div>
      
      <div className="dropzone-wrap1">
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
      <img src={vectorUpload} alt="Mambu"></img>
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
          Drag and drop PDF, JEPG,PNG file or <p className="browseco">Browse from computer</p>
          </p>
        )}
      </div>
      </div>
      
    </div>
    
  );
};

export default Dropzone;