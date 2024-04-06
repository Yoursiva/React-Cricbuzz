import React from "react";
import "../Navbar.css";

const League=({league})=>{
    return(
        <div className="league">
            <h2>Indian Premier League 2024</h2>
            {
                (league.length)? league.map((leagues)=>(
                        <div className="leagueoption" key={leagues.id}>{leagues.option}</div>
                    )): <p>Database not loeaded..</p>
            }
        </div>
    )
}

export default League;