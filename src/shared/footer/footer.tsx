import React from "react";
import { useLocation } from "react-router-dom";
import "../../assets/css/footer.css";
import { useEffect } from "react";



export default function Footer() {
    
 
  const location = useLocation();
  var currentPage ="";

   currentPage = location.pathname.slice(1);

  useEffect(() => {
    console.log();
    const myClass: HTMLInputElement | null = document.querySelector("." + location.pathname.slice(1)) as HTMLInputElement;

    if (myClass) {
        myClass.id = "active";
    }

    // document.querySelector("." + location.pathname.slice(1)).id = "active";
    console.log();
  }, [currentPage]);


  return (
    <div>
          <div className="pagination">
            <button className="pagination-btn">
              <span className="PersonalDetails" id=""></span>
            </button>
            <button className="pagination-btn ">
              <span className="CustomerIdentification" id=""></span>
            </button>
            <button className="pagination-btn ">
              <span className="KYC" id=""></span>
            </button>
            <button className="pagination-btn">
              <span className="SecurityQuestions" id=""></span>
            </button>
          </div>
    </div>
  );
}
