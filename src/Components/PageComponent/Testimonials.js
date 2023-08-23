import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import TestimonialsCards from './TestimonialsCards'

export default function Testimonials() {
  return (
    <div style={{marginTop:100, maxWidth:'75%'}}>
        <h6>Testimonials</h6>
        <h3>What community members are saying about us?</h3>
        <Container>
            <Row>
                <Col sm={12} md={4} style={{padding:10}}><TestimonialsCards/></Col>
                <Col sm={12} md={4} style={{padding:10}}><TestimonialsCards/></Col>
                <Col sm={12} md={4} style={{padding:10}}><TestimonialsCards/></Col>
            </Row>
        </Container>
    </div>
  )
}
