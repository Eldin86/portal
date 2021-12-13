import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'react-bootstrap'

import Pagination from '../components/Pagination'
import CardItem from '../components/CardItem'
import { useHttp } from '../shared/hooks/http-hook'
import Loading from '../shared/UIElements/Loading'
import './Home.css'

const Home = () => {
    const [data, setData] = useState()
    const { isLoading, error, sendRequest } = useHttp()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await sendRequest('/data.json')
                setData(response)
            } catch (error) { }
        }
        fetchPosts()
    }, [sendRequest])

    return (
        <div className="my-4 home-page">
            <Row>
                <Col md={12} lg={9} className="d-flex flex-wrap">
                    {isLoading && <Loading />}
                    { error && <h2 className="text-center">{error}</h2>}
                    {
                        data && data.map(p => {
                            return <CardItem key={p.id} id={p.id} image={p.image} title={p.title} heading={p.heading}/>
                        })
                    }
                </Col>
                <Col xs={12} lg={3} className="aside">
                    <h4 className="p-2">Najnovije</h4>
                    <div>
                        <Link to="/top-news/0" className="top-news text-dark">
                            <h6 className="font-weight-bold pb-2 mb-2">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        </Link>
                        <Link to="/top-news/1" className="top-news text-dark">
                            <h6 className="font-weight-bold pb-2 mb-2">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        </Link>
                        <Link to="/top-news/2" className="top-news text-dark">
                            <h6 className="font-weight-bold pb-2 mb-2">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        </Link>
                        <Link to="/top-news/3" className="top-news text-dark">
                            <h6 className="font-weight-bold pb-2 mb-2">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        </Link>
                        <Link to="/top-news/4" className="top-news text-dark">
                            <h6 className="font-weight-bold pb-2 mb-2">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        </Link>
                        <Link to="/top-news/5" className="top-news text-dark">
                            <h6 className="font-weight-bold pb-2 mb-2">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Pagination />
            </Row>
        </div>
    )
}

export default Home
