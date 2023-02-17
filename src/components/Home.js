import React from 'react'
import Navbar from './Navbar'
import leftimg from "../images/home.svg";

function Home() {
  return (
    <>
     <Navbar /> 
     <div className="hero mt-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={leftimg} className="max-w-sm rounded-lg mb-16 mx-4" />
    <div>
      <div className="text-9xl font-bold">Service for Military <span className='text-orange-500'>Serviceman</span></div>
      <p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="bg-green-900 hover:bg-base-300 hover:text-green-900 text-white font-bold py-4 px-6 rounded">Get Started</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Home
