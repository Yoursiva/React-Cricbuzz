import React from "react";
import "../Navbar.css";

const Submenu=({submenus})=>{
    return(
        <div className="Submenu">
            <ul className="menulist">
                {
                    (submenus.length)? submenus.map((smenu)=>(
                        <li className="smenu" key={smenu.id}>{smenu.submenu}</li>
                    )): <li>Database not loeaded..</li>
                }
            </ul>
            <button>ALL</button>
        </div>
    )
}

export default Submenu;