import React from 'react'
import Navbar from './Navbar'
import leftimg from "../images/home.svg";

function Home() {
  return (
    <>
     <Navbar /> 
     <div className='overflow-y-hidden'>
     <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={leftimg} className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Service for Military Serviceman</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
     </div>
    </>
  )
}

export default Home
