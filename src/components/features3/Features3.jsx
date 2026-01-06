import React from 'react'
import './Features3.css'
const Features3 = () => {
  return (
    <div className='container features3-container mt-5'>
        <div className="box">
            <div className="features3-content p-3">
                <h2>Find Your Dream </h2>
                <h2>Home Here </h2>
                <p>You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment and facilities we provide here.</p>
            </div>
            <img src="/features3-image1.jpg" className='features3-image1 p-3' alt="features3-image1" />
        </div>
        <div className="box">
            <img src="/features3-image2.jpg" className='features3-image2 p-3' alt="features3-image2" />
            <img src="/features3-image3.jpg" className='features3-image3 mt-5 p-3' alt="features3-image3" />
        </div>
    </div>
  )
}

export default Features3