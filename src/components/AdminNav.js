import React, {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Nav, Button } from 'react-bootstrap'

import { AuthContext } from '../shared/context/auth-context' 
import './AdminNav.css'

const AdminNav = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutHandler = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <Nav className="my-4 admin-nav">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/admin/dashboard" className="text-dark pl-0">
                    <strong>PROFIL</strong>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/admin/add-post" className="text-dark pl-0">
                    <strong>DODAJ POST</strong>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/admin/add-user" className="text-dark pl-0">
                    <strong>DODAJ KORISNIKA</strong>
                </Nav.Link>
                <Button onClick={logoutHandler} style={{textDecoration: 'none'}} variant="link" className="text-dark pl-0">
                   <strong>LOGOUT</strong>
                </Button>

            </Nav.Item>
        </Nav>
    )
}

export default AdminNav
