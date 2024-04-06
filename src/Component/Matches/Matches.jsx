import React from "react";
import "../Navbar.css";

const Matches=()=>{
    const score={"display":"flex","width":"70%","color":"#222","fontSize":"12px","fontWeight":"700"}
    const scoreb={"fontSize": "12px","color":"#222","marginLeft":"70px","fontWeight":"Normal"}
    const session={"display": "content","color":"red","fontSize":"12px"}
    return(
        <div className="matches">
            <div><h4>FEATURED MATCHES</h4></div>
            <div className="match">
                <div className="matchblock">
                    <div style={score}>IND<div style={scoreb}>341-7</div></div>
                    <div style={score}>AUS</div><div style={scoreb}></div>
                    <div style={session}>Day 2: 1 Session</div>
                </div>
                <div className="matchblock">
                    <div style={score}>IND<div style={scoreb}>341-7</div></div>
                    <div style={score}>AUS</div><div style={scoreb}></div>
                    <div style={session}>Day 2: 1 Session</div>
                </div>
                <div className="matchblock">
                    <div style={score}>IND<div style={scoreb}>341-7</div></div>
                    <div style={score}>AUS</div><div style={scoreb}></div>
                    <div style={session}>Day 2: 1 Session</div>
                </div>
                <div className="matchblock">
                    <div style={score}>IND<div style={scoreb}>341-7</div></div>
                    <div style={score}>AUS</div><div style={scoreb}></div>
                    <div style={session}>Day 2: 1 Session</div>
                </div>
            </div>
        </div>
    )
}
export default Matches;