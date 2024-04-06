import React from "react";

const Photo=({photo})=>{
    return(
        <div className="Photos">
            <h3>LATEST PHOTOS</h3>
            {
                (photo.length)? photo.map((data)=>(
                    <div key={data.id} className="newscontent">
                        <img src={require('../Assets/'+data.pic)} alt="" />
                        
                        <span className="title">{data.title}</span><br></br>
                        <span className="hour">{data.hour}</span>
                    </div>
                )): <div>No Latest News...</div>
            }

        <p>Load more...</p>
        </div>
    )
}
export default Photo;