import sidebar from "../../assets/img/SideBar.png";
import line from "../../assets/img/Line.png";
import { useLocation } from "react-router-dom";
import "../../assets/css/sidenav.css";
import { Stepper, StepLabel, Step } from "@mui/material";

export default function Sidenav() {
  const location = useLocation();
  const activeStep = getActiveStep(location.pathname);

  function getActiveStep(pathname: string): number {
    switch (pathname) {
      case "/PersonalDetails":
        return 0;
      case "/CustomerIdentification":
        return 1;
      case "/KYC":
        return 2;
      case "/SecurityQuestions":
        return 3;
      default:
        return 0;
    }
  }

  // Implementation of sidenavbar using stepper
  return (
    <div>
      <div className="side">
        <span>
          <img className="sidebarimg" src={sidebar} />
        </span>

        <div className="sideText">
          <p>
            Get your <text className="bold">Digital Savings Account</text> In 4
            simple steps
          </p>
          <div>
            <div>
              <span>
                 
                <img className="barcode-1" src={line} alt="vector" />       
              </span>
              <div className="progress-bar1">
                <Stepper
                className="stepperactive"
                  orientation="vertical"
                  activeStep={activeStep}
                >
                  <Step className="step1">
                    <StepLabel className="items">Personal Details</StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="items">
                      Customer Identification
                    </StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="items">KYC</StepLabel>
                    <p className="progressbartext">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Step>

                  <Step className="step1">
                    <StepLabel className="items">Security Questions</StepLabel>
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
      </div>
    </div>
  );
}
