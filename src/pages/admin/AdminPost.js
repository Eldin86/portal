import React, { useState, useEffect, useRef } from 'react'

import { Row, Col, Form, Button, Figure } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import AdminNav from '../../components/AdminNav'
import './AdminPost.css'

const AdminPost = () => {
    const [prevImage, setPrevImage] = useState()
    const inputRef = useRef(null)
    const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"]

    const formik = useFormik({
        initialValues: {
            title: '',
            category: '',
            text: '',
            image: ''
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Naslov je obavezan'),
            category: Yup.string().min(1, 'Odaberite kategoriju').required('Kategorija je obavezana'),
            text: Yup.string().required('Text je obavezan'),
            image: Yup.mixed().required().test('type', 'Only JPG, PNG files', value => {
                if (!value?.type) return
                setPrevImage(value)
                return SUPPORTED_FORMATS.includes(value.type)
            })
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm();
        }
    })

    const clickHandler = () => {
        inputRef.current.click()
    }

    useEffect(() => {
        console.log(formik)
        console.log(prevImage)

    }, [formik, prevImage])

    return (
        <>
            <Row>
                <Col md={3}>
                    <AdminNav />
                </Col>
                <Col md={9} className="my-4 admin-dashboard-form">
                    <h2 className="my-3">DODAJ OBJAVU</h2>
                    <Form onSubmit={formik.handleSubmit} className="py-4">
                        <div className="d-flex">
                            <Form.Group as={Col} md={6} className="mb-3 pl-0">
                                <Form.Control id="title" type="text" placeholder="Naslov" {...formik.getFieldProps('title')} />
                                {formik.touched.title && formik.errors.title ? (
                                    <h6 className="text-danger">{formik.errors.title}</h6>
                                ) : null}
                            </Form.Group>

                            <Form.Group as={Col} md={6} className="mb-3 pr-0">
                                <Form.Control as="select" id="category" {...formik.getFieldProps('category')}>
                                    <option value="">Odaberite kategoriju</option>
                                    <option value="vijest">Vijesti</option>
                                    <option value="zabava">Zabava</option>
                                    <option value="stars">Stars</option>
                                    <option value="sport">Sport</option>
                                    <option value="hronika">Hronika</option>
                                </Form.Control>
                                {formik.touched.category && formik.errors.category ? (
                                    <h6 className="text-danger">{formik.errors.category}</h6>
                                ) : null}
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3 pl-0">
                            <Form.Control id="text" as="textarea" rows={3} placeholder="Text" {...formik.getFieldProps('text')} />
                            {formik.touched.text && formik.errors.text ? (
                                <h6 className="text-danger">{formik.errors.text}</h6>
                            ) : null}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                accept=".jpg, .jpeg, .png"
                                hidden
                                ref={inputRef}
                                type="file"
                                name="image"
                                id="image"
                                onBlur={formik.handleBlur}
                                onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])} />
                            <Button variant="secondary" className="upload-button" onClick={clickHandler}>
                                Upload image
                                <svg height="20" viewBox="0 0 48 48" width="20">
                                    <path d="M0 0h48v48h-48z" fill="none" />
                                    <path d="M18 32h12v-12h8l-14-14-14 14h8zm-8 4h28v4h-28z" />
                                </svg>
                            </Button>
                            {formik.touched.image && formik.errors.image ? (
                                <div>{formik.errors.image}</div>
                            ) : null}
                        </Form.Group>
                        <div>
                            {
                                prevImage && <Figure>
                                    <Figure.Image
                                        width={150}
                                        alt="preview"
                                        src={URL.createObjectURL(prevImage)}
                                    />
                                </Figure>
                            }
                        </div>

                        <Button type="submit" variant="dark" disabled={!(formik.isValid && formik.dirty)}>Dodaj Post</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default AdminPost
