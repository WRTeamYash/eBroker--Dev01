import React from 'react'
import HeroSection from './Sections/HeroSection'
import FeatureSection from './Sections/FeatureSection'
import ApartmentSection from './Sections/ApartmentSection'
import PropertiesSection from './Sections/PropertiesSection'
import PropertiesCitySection from './Sections/PropertiesCitySection'
import MostFavoritesSection from './Sections/MostFavoritesSection'
import AgentSection from './Sections/AgentSection'

const Home = () => {
    return (
        <>

            <HeroSection />
            <FeatureSection />
            <ApartmentSection/>
            <PropertiesSection/>
            <PropertiesCitySection/>
            <MostFavoritesSection/>
            <AgentSection/> 

        </>
    )
}

export default Home