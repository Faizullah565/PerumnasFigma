import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Glallery.css"
const Glallery = () => {
    return (
        <div className="glallery-container">
            
                    <img src="glallery1.jpg" alt="Glallery1" className='glallery-images'/>
                
                    <img src="glallery2.jpg" alt="Glallery2" className='glallery-images' />
                
                    <img src="glallery3.jpg" alt="Glallery3" className='glallery-images' />
                
        </div>
    )
}

export default Glallery