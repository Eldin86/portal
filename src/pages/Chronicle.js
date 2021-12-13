import React, { useEffect, useState } from 'react'

import { Row } from 'react-bootstrap'

import HorizontalCardItem from '../components/HorizontalCardItem'
import Loading from '../shared/UIElements/Loading'
import { useHttp } from '../shared/hooks/http-hook'
import Pagination from '../components/Pagination'

const Chronicle = () => {
    const { isLoading, error, sendRequest } = useHttp()
    const [data, setData] = useState()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await sendRequest('/data.json')
                console.log(response)
                setData(response)
            } catch (error) { }
        }
        fetchPosts()
    }, [sendRequest])

    return (
        <div className="my-4 category">
            <Row>
                {isLoading && <Loading />}
                {error && <h2 className="text-center">{error}</h2>}
                {
                    data && data.map(p => {
                        return <HorizontalCardItem category="hronika" key={p.id} id={p.id} image={p.image} title={p.title} heading={p.heading} />
                    })
                }
            </Row>
            <Row className="justify-content-center mt-3">
                <Pagination />
            </Row>
        </div>
    )
}

export default Chronicle
