import React from 'react';
import '../../App.css';
import Navbar from './Navbar';
import HomeContent from '../HomeContent';
// import Cards from '../Policy/Policies';
import Cards from '../Policy/Policies';
import Info from '../Information/Info';
import Meaning from '../Information/Meaning';
import Importance from '../Information/Importance';
import ImgSlider from '../assets/ImgSlider';
import MySlider from '../assets/MySlider';
import Footer from '../Footer/Footer';
import Benefits from '../Information/Benefits';
import MySwiperCard from '../MySwiper';
import SwiperCard from '../SliderCard';
import Dashboard from '../Dashboard/Dashboard';
import PolicyCard from '../Policy/PolicyCard';


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <HomeContent />

      {/* <MySwiperCard/> */}
      {/* <SwiperCard/> */}

      {/* <Cards /> */}
      {/* <ImgSlider/> */}
      {/* <MySlider/> */}
      
      {/* <Benefits/> */}

      {/* <Info/>
      <Meaning/>
      <Importance/> */}
      {/* <PolicyCard/> */}

      <Footer />
    </div>
  );
}

export default Home;