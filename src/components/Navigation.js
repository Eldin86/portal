import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Nav, Navbar, Form, Button, Container } from 'react-bootstrap'

import User from '../assets/user.svg'
import Logo from '../assets/logo.svg'
import Search from '../assets/search.svg'
import Close from '../assets/close.svg'
import { AuthContext } from '../shared/context/auth-context'
import './Navigation.css'

const Navigation = () => {
    const auth = useContext(AuthContext)

    const [showSearch, setShowSearch] = useState(false)

    const showSearchHandler = () => {
        setShowSearch(true)
    }

    const hideSearchHandler = () => {
        setShowSearch(false)
    }

    return (
        <div className="navigation">
            <Container className="px-0">
                <Navbar collapseOnSelect expand="lg" className="pb-0 px-0 navbar flex-lg-column align-items-start navbar-expand-lg navbar-light bg-light">
                    <Navbar.Brand className="navbar-logo" as={Link} to="/">
                        <img src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="w-100 main-navbar-container">
                        <Nav className="mr-auto main-navbar">
                            <Nav.Link as={NavLink} to="/">NASLOVNA</Nav.Link>
                            <Nav.Link as={NavLink} to="/vijesti">VIJESTI</Nav.Link>
                            <Nav.Link as={NavLink} to="/zabava">ZABAVA</Nav.Link>
                            <Nav.Link as={NavLink} to="/stars">STARS</Nav.Link>
                            <Nav.Link as={NavLink} to="/sport">SPORT</Nav.Link>
                            <Nav.Link as={NavLink} to="/hronika">HRONIKA</Nav.Link>
                            {
                                auth.isLoggedIn && <Nav.Link as={Link} to="/admin/dashboard">ADMIN</Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {
                                !auth.isLoggedIn && (
                                    <Nav.Link as={Link} to="/login">
                                        <img width="20px" src={User} alt="user" />
                                    </Nav.Link>
                                )
                            }
                            <Form className="navbar-form form-inline">
                                <div className="input-group search-box">
                                    {showSearch && <input type="text" id="search" className="form-control" placeholder="Pretrazi novosti" />}
                                    <div className="input-group-append">
                                        {
                                            showSearch ? (
                                                <Button onClick={hideSearchHandler} type="button" className="input-group-text bg-transparent border-0 mt-1 pl-0"><img width="15px" src={Close} alt="close" /></Button>
                                            ) : (
                                                <Button onClick={showSearchHandler} type="button" className="input-group-text bg-transparent border-0 mt-1 pl-0"><img width="15px" src={Search} alt="search" /></Button>
                                            )
                                        }
                                    </div>
                                </div>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navigation
