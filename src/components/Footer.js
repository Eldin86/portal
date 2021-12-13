import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Image, Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Youtube from '../assets/youtube.svg'
import Copyright from '../assets/copyright.svg'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="flex-column py-2 px-3 flex-md-row">
                    <div className="text-center"><img src={Logo} alt="Logo" /></div>
                    <div className="d-inline-flex flex-wrap p-2 align-self-md-center ">
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/"><strong>NASLOVNA</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/vijesti"><strong>VIJESTI</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/zabava"><strong>ZABAVA</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/stars"><strong>STARS</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/sport"><strong>SPORT</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/hronika"><strong>HRONIKA</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="text-dark" as={Link} to="/admin/dashboard"><strong>ADMIN</strong></Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className="ml-lg-auto d-flex justify-content-center">
                            <a className="mx-2 d-flex" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><Image width="25px" src={Facebook} /></a>
                            <a className="mx-2 d-flex" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><Image width="25px" src={Instagram} /></a>
                            <a className="mx-2 d-flex" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><Image width="25px" src={Twitter} /></a>
                            <a className="mx-2 d-flex" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><Image width="25px" src={Youtube} /></a>                        
                    </div>
                </Row>
                <Row>
                    <Col className="copyright py-2 px-3">
                        <img src={Copyright} alt="copyright" width="15px" />{" "}
                        <small>portal.com {new Date().getFullYear()} - Sva prava pridržana.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer