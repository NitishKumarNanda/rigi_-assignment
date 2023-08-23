import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import image from '../Image/community.jpg'

export default function Community() {
    return (
        <Container  style={{maxWidth:'75%'}} >
            <Row>
                <Col sm={12} md={6} lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <h3>The 1% Club</h3>
                        <p>Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time.</p>
                        <ul style={{ listStyleType: "none", padding: 20 }}>
                            <li>Exclusive 1 on 1 interaction with the creator</li>
                            <li>Connect with like minded folks, from diverse backgrounds & cities</li>
                            <li>32+ Hours of Investing Tutorials, Tools & Community</li>
                        </ul>
                    </Card>
                    <br />
                    <div style={{ display: 'inline-flex', border: '1px solid white', backgroundColor: '#335FF4', padding: '10px 100px', borderRadius: 30, color: 'white', fontWeight: 600, marginBottom:30}}>
                        Join the Community
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img className='img-fluid' src={image} alt='Community' style={{ maxHeight: 500, border: '1px solid lightskyblue', borderRadius: 50 }} />
                </Col>
            </Row>
        </Container>
    )
}
