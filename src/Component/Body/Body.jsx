import React from "react";
import News from "./News";
import Photo from "./Photo";
import Content from "./content";
import Ads from "./ads";
import "../Navbar.css";
import Special from "./Special";

const Body=({photo,news,special,cont})=>{
    return(
        <div className="content">
            <div className="contentlft">
                <News news={news} />
                <Photo photo={photo} />
            </div>
            <div className="contentcenter">
                <Content cont={cont}/>
            </div>
            <div className="contentlast">
                <Ads />
                <Special special={special}/>
            </div>
        </div>
    )
}
export default Body;