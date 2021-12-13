import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Card, Button } from 'react-bootstrap'

import Edit from '../assets/edit.svg'
import { AuthContext } from '../shared/context/auth-context'

const CardItem = ({ id, image, title, heading }) => {
    const auth = useContext(AuthContext)

    return (
        <>
            <Card>
                {
                    auth.isLoggedIn && (
                        <Button as={Link} to={`/admin/edit-post/${id}`} className="align-items-left edit-btn" variant="link">Edit
                            <img className="ml-2" width="15px" src={Edit} alt="edit" />
                        </Button>
                    )
                }
                <Link to={`/post/${id}`} className="text-dark">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <strong>{heading}</strong>
                        </Card.Text>

                    </Card.Body>
                </Link>
            </Card>
        </>
    )
}

export default CardItem
