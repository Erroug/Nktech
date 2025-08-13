import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import WhoAreWe from '../components/WhoareWe.jsx'
import Testimonials from '../components/Testimonials.jsx'
import AwardsAchievements from "../components/AwardsAchievements.jsx"
// import Quality from "../components/Quality.jsx"
import ServicesSection from "../components/ServicesSection .jsx"
import Offer from "./Offer.jsx";
import Quality from '../components/Quality.jsx'
import Career from '../pages/career.jsx'
import ClientsMarquee from '../components/ClientsMarquee.jsx'
import Consultation from '../components/Consultation.jsx'
import PopularSearches from '../components/PopularSearches.jsx'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <WhoAreWe/>
        <Offer/>
        <Quality/>
        <Career/>
        <AwardsAchievements/>
        <ServicesSection/>
        <ClientsMarquee/>
        <Testimonials/>
        <Consultation/>
        <PopularSearches/>

    </div>
  )
}

export default Home