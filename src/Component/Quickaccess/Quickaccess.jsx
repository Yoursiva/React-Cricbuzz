import React from "react";
import { GrTrophy } from "react-icons/gr";
import { BiMedal } from "react-icons/bi";
import { PiUsersThreeFill } from "react-icons/pi";


const Quickaccess=()=>{
    const iconstyle={
        "VerticalAlign": "middle",
        "MarginRight": "5px"
    }
    return(
        <div className="quick">
            <h2>Quick Access</h2>
            <div><GrTrophy style={iconstyle}/>IPL 2024</div>
            <div><BiMedal style={iconstyle}/>See Plans</div>
            <div><PiUsersThreeFill style={iconstyle} />CSK</div>
            <div><PiUsersThreeFill style={iconstyle} />RCB</div>
            <div><PiUsersThreeFill style={iconstyle} />MI</div>
            <div><GrTrophy style={iconstyle} />Fantasy Handbook</div>
            <div>+ Cricbuzz Plus</div>
        </div>
    )
}

export default Quickaccess;