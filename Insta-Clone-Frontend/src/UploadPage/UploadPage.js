import React from "react";
import { useNavigate } from 'react-router-dom';
import "./upload.css";

const Upload = () => {
    const navigate = useNavigate();

   
    const handleSubmit = async (e) => {
       
        e.preventDefault()
        let data =e.target
        let formData=new FormData(data)
        await fetch('https://instaclone-backend-fe73.onrender.com/posts',{method:"POST",body:formData})
        .then(res=> res.json()).then((d)=>{
            alert("post successful")
            console.log(d);
        }).catch((e)=>{console.log(e.message)}).finally(()=>{navigate("/InstaClone")})
    }
    return (
        <div className="uploadcontainer">
            <h1>Upload Your Post</h1>  
            <form onSubmit={(e)=>handleSubmit(e)} id='mainform'>
                <input type="file" required placeholder="File" name="PostImage"  className="input1" id="image"/><br/>
                <input type="text" required placeholder="Author" name="name" className="input1"  /><br/>
                <input type="text" required placeholder="Enter Location" name="location" className="input1"  /><br/>
                <input type="text" required placeholder="Post Description" name="description" className="input1"  /><br/>
                <button type="submit"><b>Post</b></button>
            </form>
        </div>
    )
}
export default Upload;