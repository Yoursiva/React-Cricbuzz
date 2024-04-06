import { useState,useEffect } from "react";
import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Submenu from "./Component/Submenu/Submenu";
import { Routes,Route} from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Display from "./Component/Display/Display";
import LiveScore from "./Pages/LiveScore";
import Schedule from "./Pages/Schedule";
import Archives from "./Pages/Archives";
import Login from "./Component/Login/Login";
import Profile from "./Pages/Profile";




function App() {
  const API_URL='http://localhost:3500/';
  const [menus,setmenus]=useState([]);
  const [submenu,setsubmenu]=useState([]);
  const [league,setleague]=useState([]);
  const [photo,setphoto]=useState([]);
  const [news,setnews]=useState([]);
  const [special,setspecial]=useState([]);
  const [Content,setcontent]=useState([]);
  const [user,setuser]=useState([]);
  const [userlog,setuserlog]=useState("notloged");

  const [log,setlog]=useState("Login");
  useEffect(()=>{
    const fetchall=async(option)=>{
      try{
        const url=API_URL+option;
        const response=await fetch(url);
        const data=await response.json();
        return data;
      }
      catch(e){
        console.log(e);
      }
    }
    const fetchdata=async()=>{
      try{

        const menu=await fetchall('menus');
        setmenus(menu);

        const smenu=await fetchall('submenus');
        setsubmenu(smenu);

        const leagues=await fetchall('League');
        setleague(leagues);

        const photos=await fetchall('Photos');
        setphoto(photos);

        const latestnews=await fetchall('News');
        setnews(latestnews);

        const special=await fetchall('Specials');
        setspecial(special);

        const Content=await fetchall('Content');
        setcontent(Content);

        const users=await fetchall('User');
        setuser(users);


      }
      catch(e){
        console.log(e);
      }
    }

    (async()=> await fetchdata())()
  },[])
  return (
    <div className="app">
      <div className="sidesize">
        <Navbar menus={menus}/>
        <Submenu submenus={submenu} /> 
          <Routes>
              <Route path="/" element={<Display league={league} photo={photo} news={news} special={special} Content={Content}/>} />
              <Route path="/LiveScores" element={<LiveScore />} />
              <Route path="/Schedule"  element={<Schedule /> } />
              <Route path="/Archives" element={<Archives /> } />
              {(userlog=="logged") ? <Route path="/profile/:id" element={<Profile user={user}/>} />: <Route path="/Login" element={<Login log={log} setlog={setlog} user={user} setuser={setuser} setuserlog={setuserlog}/>} /> }
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
