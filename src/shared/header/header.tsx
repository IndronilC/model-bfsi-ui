import "../../assets/css/header.css";
import topbar from "../../assets/img/TopBar.png"
import logo from "../../assets/img/Logo.png"


export default function Header (){
  //Implementation of Header with proper images
    return(
        <div className="topbar1">
        <img className="topbarimg" src={topbar} alt="logo" />
        <img className="logo" src={logo} />
      </div>
    )
}