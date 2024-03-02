import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero div-with-gradient'>
        <img  src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' alt="" />
        <div className="hero-content">
            <h1 style={{color:'orange'}}>It's all about good food</h1>
            <p style={{lineHeight:'2rem'}} className='text-dark fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repudiandae dolore eos natus quam ullam reprehenderit praesentium adipisci.</p>
        </div>
    </div>
  )
}

export default Hero
