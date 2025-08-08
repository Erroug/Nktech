import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import WhoAreWe from '../components/WhoareWe.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AwardsAchievements from "../components/AwardsAchievements.jsx"
// import Quality from "../components/Quality.jsx"
import ServicesSection from "../components/ServicesSection .jsx"
import Offer from "./Offer.jsx";
import Quality from '../components/Quality.jsx'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <WhoAreWe/>
        <Offer/>
        <Quality/>
        <Testimonials/>
        <AwardsAchievements/>
        <ServicesSection/>
  
    </div>
  )
}

export default Home