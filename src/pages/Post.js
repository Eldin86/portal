import React, {
    useState,
    //useEffect
} from 'react'

import { Row, Col, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
//import Loading from '../shared/UIElements/Loading'
//import { useHttp } from '../shared/hooks/http-hook'

import './Post.css'

const Post = () => {
    const [comments, setComments] = useState([
        {
            ime: 'John Doe',
            date: '5.12.2021. 01:30',
            komentar: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete 
            account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure 
            rationally encounter consequences that are extremely painful.`
        },
        {
            ime: 'Jane Doe',
            date: '1.12.2021. 21:45',
            komentar: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete 
            account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure 
            rationally encounter consequences that are extremely painful.`
        }
    ])
    //const { isLoading, error, sendRequest } = useHttp()
    //const [data, setData] = useState()

    //fetch single post
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await sendRequest('/data.json')
    //             console.log(response)
    //             setData(response)
    //         } catch (error) { }
    //     }
    //     fetchPosts()
    // }, [sendRequest])

    const formik = useFormik({
        initialValues: {
            ime: '',
            komentar: '',
        },
        validationSchema: Yup.object().shape({
            ime: Yup.string().required('Ime je obavezno'),
            komentar: Yup.string().required('Komentar je obavezan'),
        }),
        onSubmit: (values, { resetForm }) => {
            const regex = /-/g
            const today = new Date();

            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            const currentDate = date.replace(regex, '.') + ' ' + time.replace(regex, '.')
            //currentDate is set on backend
            setComments(prevState => ([...prevState, { ...values, date: currentDate }]))
            resetForm();
        }
    })

    return (
        <div className="my-4 single-post">
            <Row>
                {/* {isLoading && <Loading />} */}
                {/* {error && <h2 className="text-center">{error}</h2>} */}
                <Col className="post-content p-3">
                    <h5 className="mb-4 category-title">LOREM IPSUM</h5>
                    <h4 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h4>
                    <img src="https://picsum.photos/500/450" alt="post banner" className="single-post-image" />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </Col>
            </Row>
            <Row className="mt-3 p-3 post-comments">
                <Col xs={12}>
                    <h5 className="mb-5">KOMENTARI</h5>
                    {comments && comments.map((comment, i) => {
                        return (
                            <div key={i} className="mb-4 post-comment">
                                <p className="mb-1"><strong>{comment.ime}</strong> {comment.date}</p>
                                <p>{comment.komentar}</p>
                            </div>
                        )
                    })}
                </Col>
                <Col className="mt-5">
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control id="ime" type="text" placeholder="Ime" {...formik.getFieldProps('ime')} />
                            {formik.touched.ime && formik.errors.ime ? (
                                <h6 className="text-danger">{formik.errors.ime}</h6>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control id="komentar" as="textarea" rows={4} placeholder="Komentar"  {...formik.getFieldProps('komentar')} />
                            {formik.touched.komentar && formik.errors.komentar ? (
                                <h6 className="text-danger">{formik.errors.komentar}</h6>
                            ) : null}
                        </Form.Group>

                        <Button type="submit" variant="dark" disabled={!(formik.isValid && formik.dirty)}>Komentariši</Button>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default Post
