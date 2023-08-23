
import React from 'react'
import JoinCommunityBanner from './JoinCommunityBanner';
import AboutMe from './AboutMe';
import Services from './Services';
import Testimonials from './Testimonials';
import MediaSection from './MediaSection';
import GetApp from './GetApp';
import ContactUs from './ContactUs';
import Footer from './Footer';



export default function JoinCommunity() {
    return (
        <>
            <JoinCommunityBanner />
            <div style={{ paddingTop: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'rgb(235,251,255)' }}>
                <AboutMe />
                <Services />
                <Testimonials />
                <MediaSection />
                <GetApp />
                <ContactUs/>
                <Footer/>
            </div>

        </>
    )
}
