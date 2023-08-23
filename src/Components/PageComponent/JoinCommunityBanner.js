import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JoinCommunityImage from '../Image/JoinTheCommunity.png';

export default function JoinCommunityBanner() {
  return (
    <div style={{ marginTop:50 , padding: 50, backgroundColor: '#335FF4' }}>
            <Container>
                <Row>
                    <Col sm={12} md={7} style={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <div>
                            <h1>Hack your wealth journey <br /> inside the 1% club</h1>
                            <p>A super premium annual subscription that will transform <br />
                                your wealth planning and make you say - <br />
                                “Bro! I’m financially sorted!”</p><br />
                            <div style={{ display: 'inline-flex', border: '1px solid white', backgroundColor: 'white', padding: '10px 100px', borderRadius: 30, color: '#335FF4', fontWeight: 600 }}>
                                Join the Community
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={5} >
                        <img className='img-fluid' src={JoinCommunityImage} alt='join community' style={{ maxHeight: 500}} />
                    </Col>
                </Row>
                
            </Container>
        </div>
  )
}
