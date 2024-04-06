import React from "react";

const content=({cont})=>{
    return(
        <div className="midcontent">
            {
                (cont.length)? cont.map((data)=>(
                    <div key={data.id} className="bodycontent">
                        <img src={require('../Assets/'+data.pic)} className="specialimg" alt="" />
                        
                        <span className="contenttitle">{data.title}</span><br></br>
                        <span className="contentmessage">{data.message}</span>
                    </div>
                )): <div>No Latest News...</div>
            }
        </div>
    )
}
export default content;