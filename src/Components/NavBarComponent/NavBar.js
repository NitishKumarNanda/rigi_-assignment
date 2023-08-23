import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" fixed="top">
            <Container>
                <Navbar.Brand href="" style={{color:"#335FF4", fontWeight:700}}>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>

                        <Nav.Link href="">Join community</Nav.Link>
                        <Nav.Link href="">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
