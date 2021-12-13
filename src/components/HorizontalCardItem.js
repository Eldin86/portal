import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Card, Button } from 'react-bootstrap'
import { AuthContext } from '../shared/context/auth-context.js'
import Edit from '../assets/edit.svg'

const HorizontalCardItem = ({ id, category, image, title, heading }) => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <Card className="col-md-6 border-0">
            {
                isLoggedIn && (
                    <Button as={Link} to={`/admin/edit-post/${id}`} className="pb-0 pl-0 edit-btn text-left" variant="link">Edit
                        <img className="ml-2" width="15px" src={Edit} alt="edit" />
                    </Button>
                )
            }
            <Link to={`/${category}/${id}`} className="category-item text-dark mb-2">
                <Row>
                    <Col sm={12} lg={4} className="d-flex align-items-center">
                        <img className="w-100" src={image} alt=""></img>
                    </Col>
                    <Col sm={12} lg={8}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <strong>{heading}</strong>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Link>
        </Card>
    )
}

export default HorizontalCardItem
