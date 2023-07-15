import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
// import video from "../assets/video.mp4"

function Home() {
  return (
    <div >
      {/* <video src={video} autoPlay loop muted /> */}
      <Navbar />
      <Slider/>
      
      <Products/>
      <Newsletter/>
      
    < Footer/> 
      </div>
  )
}

export default Home