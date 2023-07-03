import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios.js'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function Banner() {
  function getRandomNumber(min, max) {
    // Generate a random decimal between 0 and 1
    const randomDecimal = Math.random();
  
    // Scale the random decimal to the desired range
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
  
    return randomNumber;
  }
  const [movie,setMovie]=useState()
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      const randomNum = getRandomNumber(0, response.data.results.length);
      setMovie(response.data.results[randomNum])
     })
  },[]) 
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}> 
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}  </h1>
                <div className='banner_buttons'>
                    <button className='button'> play</button>
                    <button className='button'> my list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""} </h1>
        </div>
        <div className="fade"> 
         
         </div>
      
    </div>
  )
}

export default Banner
