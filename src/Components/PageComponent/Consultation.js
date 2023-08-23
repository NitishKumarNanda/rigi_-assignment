import React from 'react'
import ConsultationType from './ConsultationType'
import { Col, Container, Row } from 'react-bootstrap'

export default function Consultation() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}><ConsultationType /></Col>
        <Col xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}><ConsultationType /></Col>
        <Col xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}><ConsultationType /></Col>
      </Row>
    </Container>
  )
}
