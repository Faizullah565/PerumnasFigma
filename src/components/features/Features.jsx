import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Features.css'
const Features = () => {
    return (
        <div className="features-section-container container">
            <Row>
                <Col md={4} className='p-4'>
                    <h1>Enjoy Quality Life in Perumnas Housing</h1>
                </Col>
                <Col></Col>
                <Col md={7} className='p-4 features-section-subcontainer2'>
                    <p>Perumnas cluster housing is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.</p>
                    <p className='stats-of-features'>
                    <Row >
                        <Col>
                            <h3>+100</h3>
                            <p>Units Ready</p>
                        </Col>
                        <Col>
                            <h3>+60K</h3>
                            <p>Customers</p>
                        </Col>
                        <Col>
                            <h3>+70K</h3>
                            <p>Reviews</p>
                        </Col>
                    </Row>
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Features