import React from "react";

const Special=({special})=>{
    return(
        <div className="Photos">
            <h2>SPECIAL</h2>
            {
                (special.length)? special.map((data)=>(
                    <div key={data.id} className="newscontent">
                        <img src={require('../Assets/'+data.pic)} className="specialimg" alt="" />
                        
                        <span className="title">{data.title}</span><br></br>
                        <span className="hour">{data.message}</span>
                    </div>
                )): <div>No Latest News...</div>
            }
        </div>
    )
}
export default Special;