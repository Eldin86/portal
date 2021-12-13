import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Form, Button } from 'react-bootstrap'

import { AuthContext } from '../shared/context/auth-context'
//import { useHttp } from '../shared/hooks/http-hook'

const Login = () => {
    const auth = useContext(AuthContext)
    //use it sendRequest to send login data to server
    //const { isLoading, error, sendRequest } = useHttp()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',

        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Ime je obavezno'),
            password: Yup.string().required('Unesite password'),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log(values)
            try {
                //Send request to server
                // const responseData = await sendRequest(
                //     'http://localhost:5000/api/login', 
                //     'POST',
                //     JSON.string({
                //         name: values.name,
                //         password: values.password
                //     })
                //     )
                //Send token from response to login => responseData.token
                auth.login('token')
                resetForm();
                navigate('/')
            } catch (error) { }

        }
    })

    return (
        <Row className="my-4">
            <Col xs={12}>
                <Link className="text-dark" to="/"><h6>BACK HOME</h6></Link>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="my-4 admin-dashboard-form">
                <h2 className="my-3">LOGIN</h2>
                <Form onSubmit={formik.handleSubmit} className="py-4">

                    <Form.Group className="mb-3">
                        <Form.Control id="name" type="text" placeholder="Ime" {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name ? (
                            <h6 className="text-danger">{formik.errors.name}</h6>
                        ) : null}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control id="password" type="text" placeholder="Password" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (
                            <h6 className="text-danger">{formik.errors.password}</h6>
                        ) : null}
                    </Form.Group>

                    <Button type="submit" variant="dark" disabled={!(formik.isValid && formik.dirty)}>LOGIN</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default Login
