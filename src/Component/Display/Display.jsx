import React from "react";
import Matches from "../Matches/Matches";
import League from "../League/League";
import Quickaccess from "../Quickaccess/Quickaccess";
import Body from "../Body/Body";


const Display=({league,photo,news,special,Content})=>{
    return(
    <>
        <Matches />
        <League league={league} />
        <Quickaccess />
        <Body photo={photo} news={news} special={special} cont={Content}/>
    </>
    )
}
export default Display