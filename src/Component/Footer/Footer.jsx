import React from "react";
import Links from "./Links";
import "../Navbar.css";

const Footer=()=>{
    return(
        <footer className="footerblock">
        <div>
            <Links />
        </div>
        <div style={{"marginTop":"15px"}}>
            <span>© 2022 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat TImes</span>
        </div>
        </footer>
    )
}
export default Footer;