import React from 'react';
import dots from './dots-loading.png'
import heart from './loading-heart.png'
import share from './telegram-app.png'
import '../App.css'

export default function Postview(props) {
   const {data}=props
   return (
       <div className='card'>
        <section className='cardhead'>
           <div> <h2>{data.name}</h2><h3 id='city'>CITY : {data.location.toUpperCase()}</h3></div>
            <img id='dots' src={dots} alt="toview"></img>
        </section>
        <section className='imagesec'><img src={data.PostImage} alt="imag"></img></section>
        <section className='sharesec'><div><img width={30} src={heart} alt="like"></img><img width={30} src={share} alt="share"></img></div><>{data.date}</></section>
        <section className='like'>{data.likes} likes</section>
        <section className='des'><h3>{data.description}</h3></section>
       </div>
    )
}