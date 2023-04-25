import React from 'react';
import landing from "./ass_13.png"
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
export default function Landing_page() {
  const navigate = useNavigate()
 
  return (
    <div id='enter'>
    <img src={landing}></img>
       <div id='goto' >
          <h1>InstaClone</h1>
          <button id='enterbutton' onClick={()=>{navigate('/InstaClone')}} >Enter</button>
        </div> 
    </div>
  )
}