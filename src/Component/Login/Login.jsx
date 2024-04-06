import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import Apirequest from "../Apirequest";

let signupfiled={ "display":"none"}


const Login=({log,setlog,user,setuser,setuserlog})=>{

    const [email,setemmail]=useState("");
    const [number,setnumber]=useState("");
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    const navigate = useNavigate();

    const signup=()=>{
        if(log=="Login"){
            setlog("Sign Up");
            signupfiled={"display":"block"}
        }
        else{
            setlog("Login")
            signupfiled={"display":"none"}
        }
    }

    const onsubmit=async(e)=>{
        e.preventDefault();

        if(log!="Login"){
            const id=user.length ? user.length+1:1;
            const addNewuser={id,username,email,password,number};
            const list=[...user,addNewuser];

            setuser(list);

            const option={
                method:'POST',
                header:{'Content-Type':'application/json'},
                body:JSON.stringify(addNewuser)
            }

            const result=await Apirequest("http://localhost:3500/User",option);

            if(log=="Login"){
                navigate("/profile")
            }else{
                setuserlog("logged")
                window.location.reload(false);
            }
        }else{
            
        }
    }
    return(
        <div className="Login">
            <form onSubmit={(e)=>onsubmit(e)}>
                <h2>{log}</h2>
                <input type="email" id="email" placeholder="Enter Your Email" onChange={(e)=>setemmail(e.target.value)}/>
                
                <input type="text" id="number" placeholder="Enter Your Number" style={signupfiled} onChange={(e)=>setnumber(e.target.value)}/>
                <input type="text" id="user" placeholder="Enter Your USerName" style={signupfiled} onChange={(e)=>setusername(e.target.value)}/>


                <input type="password" id="password" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)}/>
            
                <button>{log}</button>
                <hr></hr>
                <div>Don't have an account?<Link to="/Login" onClick={()=>signup()}>{log==="Login" ? "Sign Up":"Login"}</Link></div>
            </form>
        </div>
    )
}
export default Login;