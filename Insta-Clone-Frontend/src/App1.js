import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import insta from './PostView/insta.png'
import Postview from './PostView/postview';
import camera from './PostView/camera.png'
function App() {
  const [userData, updateUserData] = useState([])
  useEffect(() => {
        fetch('http://localhost:7000/getposts')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
              console.log(myJson);
              myJson.reverse()
              updateUserData(myJson)
            });
            
    },[])
    
  
  return (
   <>
    <header id='header'>
      <div id='fix'>
      <div id='head'><img id='logo' alt='logo' src={insta}>
      </img><h2 id='title'><b>InstaClone</b></h2></div> <Link to="/upload">
        <img  alt='cam' src={camera}  id='camera' width={'80px'} height={'80px'}  /></Link> 
        </div> 
        </header>
        <div className="App">
        <div className='cards'>
          {userData.map((ele, ind) => {
            return <Postview key={`card${ind}`} data={ele} index={ind}/>
            })}
        </div>
    </div>
    </>
  )
}
export default App;