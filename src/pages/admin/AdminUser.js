import React from 'react'

import {  Row, Col, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import AdminNav from '../../components/AdminNav'

const AdminDashboard = () => {
    const phoneRegExp = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{3})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            phone: '',
            username: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Ime je obavezno'),
            lastName: Yup.string().required('Prezime je obavezano'),
            email: Yup.string().email('Nevažeći email email').required('Email je obavezan'),
            phone: Yup.string().matches(phoneRegExp, 'Nevažeci broj telefona').required('Telefon je obavezan'),
            username: Yup.string().required('Username je obavezana')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm();
        }
    })

    return (
        <>
            <Row>
                <Col md={3}>
                    <AdminNav />
                </Col>
                <Col md={9} className="my-4  admin-dashboard-form">
                    <h2 className="my-3">DODAJ KORISNIKA</h2>
                    <Form onSubmit={formik.handleSubmit} className="py-4">
                        <div className="d-flex">
                            <Form.Group as={Col} md={6} className="mb-3 pl-0">
                                <Form.Control id="name" type="text" placeholder="Ime" {...formik.getFieldProps('name')} />
                                {formik.touched.name && formik.errors.name ? (
                                    <h6 className="text-danger">{formik.errors.name}</h6>
                                ) : null}
                            </Form.Group>

                            <Form.Group as={Col} md={6} className="mb-3">
                                <Form.Control id="lastName" type="text" placeholder="Prezime" {...formik.getFieldProps('lastName')} />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <h6 className="text-danger">{formik.errors.lastName}</h6>
                                ) : null}
                            </Form.Group>
                        </div>

                        <div className="d-flex">
                            <Form.Group as={Col} md={6} className="mb-3 pl-0">
                                <Form.Control id="email" type="text" placeholder="Email" {...formik.getFieldProps('email')} />
                                {formik.touched.email && formik.errors.email ? (
                                    <h6 className="text-danger">{formik.errors.email}</h6>
                                ) : null}
                            </Form.Group>

                            <Form.Group as={Col} md={6} className="mb-3">
                                <Form.Control id="phone" type="tel" placeholder="Phone eg +387 61123456" {...formik.getFieldProps('phone')} />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <h6 className="text-danger">{formik.errors.phone}</h6>
                                ) : null}
                            </Form.Group>
                        </div>
                        <Form.Group as={Col} md={6} className="mb-3 pl-0">
                            <Form.Control id="username" type="text" placeholder="Username" {...formik.getFieldProps('username')} />
                            {formik.touched.username && formik.errors.username ? (
                                <h6 className="text-danger">{formik.errors.username}</h6>
                            ) : null}
                        </Form.Group>

                        <Button type="submit" variant="dark" disabled={!(formik.isValid && formik.dirty)}>Dodaj Korisnika</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default AdminDashboard
