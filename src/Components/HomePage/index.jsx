import React from 'react'
import HeroSection from './Sections/HeroSection'
import FeatureSection from './Sections/FeatureSection'
import ApartmentSection from './Sections/ApartmentSection'
import PropertiesSection from './Sections/PropertiesSection'
import PropertiesCitySection from './Sections/PropertiesCitySection'
import MostFavoritesSection from './Sections/MostFavoritesSection'
import ArticleSection from './Sections/ArticleSection'
import FooterSection from './Sections/FooterSection'

const Home = () => {
    return (
        <>

            <HeroSection />
            <FeatureSection />
            <ApartmentSection />
            <PropertiesSection />
            <PropertiesCitySection />
            <MostFavoritesSection />
            <ArticleSection />
            <FooterSection/>
        </>
    )
}

export default Home