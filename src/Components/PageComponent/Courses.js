import React from 'react'
import CoursesStructure from './CoursesStructure'
import { Col, Container, Row } from 'react-bootstrap'

export default function Courses() {
  return (
         
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
              <CoursesStructure/>
            </Col>
            <Col xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
              <CoursesStructure/>
            </Col>
            <Col xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
              <CoursesStructure/>
            </Col>
          </Row>
        </Container>
  )
}
