import React from "react";
import logo from "../Assets/cb_logo.svg";
import "../Navbar.css";
const Links=()=>{
    return(
        <div className="links">
            <div className="footercontent">
                <img src={logo} alt="" />
            </div>
            <div className="footercontent">
                <h3>MOBILE SITE & APPS</h3>
                <ul>
                    <li>m.cricbuzz.com</li>
                    <li>Android</li>
                    <li>iOS</li>
                </ul>
            </div>

            <div className="footercontent">
                <h3>FOLLOW US ON</h3>
                <ul>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>youtube</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            
            <div className="footercontent">
                <h3>COMPANY</h3>
                <ul>
                    <li>Careers</li>
                    <li>Advertise</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Cricbuzz TV Ads</li>
                </ul>
            </div>


        </div>
    
    )
}
export default Links;