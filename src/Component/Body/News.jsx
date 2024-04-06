import React from "react";

const News=({news})=>{
    return(
        <div className="news">
            <h2>LATEST NEWS</h2>
            {
                (news.length)? news.map((data)=>(
                    <div key={data.id} className="newscontent">
                        <span className="title">{data.title}</span><br></br>
                        <span className="hour">{data.hour}</span>
                    </div>
                )): <div>No Latest News...</div>
            }

        <p>More news...</p>
        </div>
    )
}
export default News;