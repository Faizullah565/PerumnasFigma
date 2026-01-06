import React from 'react'
import './Hero.css'
const HeroSection = () => {
    return (
        <div className='hero-container'>
            <img src="/bg-transparent-image.png" className='main-page-image' alt="" />
            <div className="top-overlay">
                <div className="overlay-title-content">
                    <h2 className='title-content'>More Comfortable.</h2>
                    <h2 className='title-content'>More Classy.</h2>
                    <small className='title-content-small'>Make your living experience even more memorable.</small>
                </div>
            </div>
            <div className="overlay-bottom"></div>
        </div>
    )
}

export default HeroSection