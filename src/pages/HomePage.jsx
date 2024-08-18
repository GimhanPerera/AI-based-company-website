import React from 'react'
import { galleryimg1, galleryimg2, galleryimg3, gimcraftLeft, gimcraftRight } from '../assets'
import Benefits from '../components/Benefits'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Pricing from '../components/Pricing'


const HomePage = () => {
    return (
        <>
            <Hero />
            <Information
                title="What is GimCraft?"
                image1={gimcraftLeft}
                image2={gimcraftRight}
            >
                <>
                    <p class="mb-4">GimCraft is an innovative platform that harnesses the power of AI to generate stunning images
                         tailored to your needs. Whether you have a specific prompt in mind or want to explore creative possibilities,
                          our 10+ pre-built AI models are designed to bring your ideas to life.</p><p> GimCraft goes beyond just image
                           generation, offering robust APIs for seamless integration into your projects, custom payment plans to
                            fit your budget, and a vibrant community ready to support and inspire you. At GimCraft, we empower
                             creators, developers, and businesses to unlock the full potential of AI-driven imagery.</p>
                </>
            </Information>
            <Benefits />
            <Gallery img1={galleryimg1} img2={galleryimg2} img3={galleryimg3}/>
            <Pricing />
        </>
    )
}

export default HomePage