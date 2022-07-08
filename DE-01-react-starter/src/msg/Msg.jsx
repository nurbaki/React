import React from 'react'
import Clock from '../clock/Clock'
import img from './img/winter1.jpg'

// External style
import "./Msg.css"

// internal style

const stillerim ={
    color:"green"
}


function Msg() {
  return (
    <div>

    <h2 style={{color:"red"}}>Hosgeldin React</h2>
    <p style= {stillerim}>Burasi jsx alani</p>
    <img className='msg-img' width="300px" src={img} alt="" />

    <img className='msg-img' width="300px" src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg" alt="" />

    <Clock/>

    </div>
  )
}

export default Msg