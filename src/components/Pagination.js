import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

import './Pagination.css'

const Paginate = () => {
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />

            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

export default Paginate