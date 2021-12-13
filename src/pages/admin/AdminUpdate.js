import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Form, Button, Figure } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const AdminUpdate = () => {

    const [prevImage, setPrevImage] = useState()
    const [value, setValue] = useState()
    const inputRef = useRef(null)
    const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"]
    
    const formik = useFormik({
        initialValues: {
            title: 'Lorem Ipsum',
            kategorija: 'Zabava',
            text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
            image: undefined
        },
        enableReinitialize: true,
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Naslov je obavezan'),
            kategorija: Yup.string().min(1, 'Odaberite kategoriju').required('Kategorija je obavezana'),
            text: Yup.string().required('Text je obavezan'),
            image: Yup.mixed().test('type', 'Only JPG, PNG files', value => {
                if (!value?.type) return true
                setPrevImage(URL.createObjectURL(value))
                return SUPPORTED_FORMATS.includes(value.type)
            })
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm();
        }
    })

    const clickHandler = () => inputRef.current.click()

    useEffect(() => {
        console.log(formik)
    }, [formik])

    const handleChange = (e) => {
        console.log(e)
        setValue(formik.values.kategorija)
    }

    return (
        <Row className="my-4">
            <Col xs={12}>
                <Link className="text-dark" to="/"><h6>BACK HOME</h6></Link>
            </Col>
            <Col className="my-4 admin-dashboard-form">
                <h2 className="my-3">EDITUJ POST</h2>
                <Form onSubmit={formik.handleSubmit} className="py-4">
                    <div className="d-flex">

                        <Form.Group as={Col} md={6} className="mb-3 pl-0">
                            <Form.Control onChange={handleChange} value={value} as="select" id="kategorija" {...formik.getFieldProps('kategorija')}>
                                <option value="">Odaberite kategoriju</option>
                                <option value="Vijesti">Vijesti</option>
                                <option value="Zabava">Zabava</option>
                                <option value="Stars">Stars</option>
                                <option value="Sport">Sport</option>
                                <option value="Hronika">Hronika</option>
                            </Form.Control>
                            {formik.touched.kategorija && formik.errors.kategorija ? (
                                <h6 className="text-danger">{formik.errors.kategorija}</h6>
                            ) : null}
                        </Form.Group>

                        <Form.Group as={Col} md={6} className="mb-3 pr-0">
                            <Form.Control id="title" type="text" placeholder="Naslov" {...formik.getFieldProps('title')} />
                            {formik.touched.title && formik.errors.title ? (
                                <h6 className="text-danger">{formik.errors.title}</h6>
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
                            (prevImage || formik.values.image) && <Figure>
                                <Figure.Image
                                    width={150}
                                    alt="preview"
                                    src={prevImage ? prevImage : formik.values.image}
                                />
                            </Figure>
                        }
                    </div>

                    <Button type="submit" variant="dark" disabled={!formik.isValid}>Dodaj Post</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default AdminUpdate
