import React from "react";
import topbar from '../assets/img/TopBar.png'
import logo from '../assets/img/Logo.png'
import arrowRight from '../assets/img/ArrowRight.png'
import { useNavigate } from "react-router-dom";
import saveIcon from '../assets/img/SaveIcon.png'
import currentIcon from '../assets/img/CurrentIcon.png'
import gropLogo from '../assets/img/Group.png'

const handleClick = () => {
    console.log("test");
};






export default function Page (){

    const navigate = useNavigate();

    function handleChange(){
        navigate("/PersonalDetails1")
    }

    function MyButton({ bName, imageName , arrowRight}) {
        return (
          <button name={imageName} className='dbutton' onClick={handleChange}>
            <img src={imageName} alt={imageName} className='spanim'></img>
            <span className='spanbut'>{bName}</span>
            <img src={arrowRight} alt={arrowRight} className='arrowim'></img>
          </button>
        );
      }

    return ( 
        <div>
        <div className="topbar">
        <img width="100%" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
       </div>
        <div>
        <div className="img-green">
        <img className="group" src={gropLogo}  alt="Mambu"></img>
        <p className="sidim">
                        Discover the 
                        <p className="sidimin"><h2><b>BEST PRODUCTS CURATED FOR YOU</b></h2></p>
                        in just a few simple steps
                     </p>
                     <footer className="foot"><span>© 2023 Mambu. All rights reserved.</span><span class="tab">Terms of Service . Privacy Policy</span></footer>
        </div>

        <div class="last">
                    <h3 className="welcome">Welcome!</h3>
                    <h1>Apply for the best products from MAMBU Bank</h1>
                    <MyButton bName="Savings Account" imageName={saveIcon} /><br/><br/>
                    <MyButton bName="Current Account" imageName={currentIcon} />
                    <img  className="arrow-1" src={arrowRight}   alt="Mambu"></img>
                    <img  className="arrow-2" src={arrowRight}  alt="Mambu"></img>
                </div>/
      </div>
      </div>
      
    )

}