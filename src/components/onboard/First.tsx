import "../App.css"
import Header from "../../shared/header/header";
import { useNavigate } from "react-router-dom";
import arrowRight from  '../assets/img/ArrowRight.png'
import saveIcon from '../assets/img/SaveIcon.png'
import currentIcon from '../assets/img/CurrentIcon.png'
import gropLogo from '../assets/img/Group.png'


interface MyButtonProps {
  bName: string;
  imageName: string;
  
}

export default function First(): JSX.Element {
  const navigate = useNavigate();

  function handleChange(): void {
    navigate('/PersonalDetails');
  }

  function MyButton({ bName, imageName }: MyButtonProps): JSX.Element {
    return (
      <button name={imageName} className="dbutton" onClick={handleChange}>
        <img src={imageName} alt={imageName} className="spanim" />
        <span className="spanbut">{bName}</span>
      
      </button>
    );
  }

  return (
    <div>
        <Header/>
      <div>
        <div className="img-green">
          <img className="group" src={gropLogo} alt="Mambu"></img>
          <p className="sidim">
            Discover the
            <p className="sidimin">
              <h2>
                <b>BEST PRODUCTS CURATED FOR YOU</b>
              </h2>
            </p>
            in just a few simple steps
          </p>
          <footer className="foot">
            <span>© 2023 Mambu. All rights reserved.</span>
            <span className="tab">Terms of Service . Privacy Policy</span>
          </footer>
        </div>

        <div className="last">
          <h3 className="welcome">Welcome!</h3>
          <h1>Apply for the best products from MAMBU Bank</h1>
          <MyButton bName="Savings Account" imageName={saveIcon}  /><br /> <br />
          <MyButton bName="Current Account" imageName={currentIcon}  />
          <img  className="arrow-1" src={arrowRight}   alt="Mambu"></img>
          <img  className="arrow-2" src={arrowRight}  alt="Mambu"></img>
      
        </div>
      </div>
    </div>
  )
}


    