import React from "react";
import logo from "../Assets/cb_logo.svg";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import "../Navbar.css";
import {Link } from "react-router-dom";


const Navbar=({menus})=>{
    
    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <ul className="menulist">
            {
            (menus.length)? menus.map((menu)=>(
                <li className="menu" key={menu.id}><Link to={menu.menu.replace(' ','')}>{menu.menu}</Link></li>
            )): <li>Database not loeaded..</li>
            }
            </ul>
            <div className="prebtn">
                <Link to="/"><button>Cricbuzz Plus</button></Link>
            </div>
            <div className="menuicon">
                <RiSearchLine />
                <Link to="/Login" style={{fontSize:"20px"}}><RiAccountCircleLine /></Link>
            </div>
            
        </div>
    )
}

export default Navbar