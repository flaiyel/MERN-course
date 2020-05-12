import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loading.css'

const Loading = ({ show }) => {
    return (
        <>{
            show ?
            <div id="loading-backdrop">
                <Spinner animation="border" variant="primary" />
            </div> : null
        }</>
    )
}

export default Loading
