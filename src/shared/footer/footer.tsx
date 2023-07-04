import React from "react";
import { useLocation } from "react-router-dom";
import "../../assets/css/footer.css";
import { useEffect } from "react";

export default function Footer() {
  const location = useLocation();

  const currentPage = location.pathname.slice(1);

  useEffect(() => {
    const buttons = document.querySelectorAll(".pagination-btn");

    buttons.forEach((button) => {
      const span = button.querySelector("span");
      const className = span?.className || "";
      const isActive = className === currentPage ? "active" : "";
      span?.setAttribute("id", isActive);
    });
  }, [currentPage]);

  return (
    <div>
      <div className="pagination">
        <button className="pagination-btn">
          <span className="PersonalDetails"></span>
        </button>
        <button className="pagination-btn ">
          <span className="CustomerIdentification"></span>
        </button>
        <button className="pagination-btn ">
          <span className="KYC"></span>
        </button>
        <button className="pagination-btn">
          <span className="SecurityQuestions"></span>
        </button>
      </div>
    </div>
  );
}
