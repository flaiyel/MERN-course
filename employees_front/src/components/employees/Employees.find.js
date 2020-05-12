import React, { useEffect } from 'react'
import { request } from '../helpers/helpers'
import { Container, Row } from 'react-bootstrap'
import './employees.css'

const Employees = () => {

    useEffect(() => {
        request.get('/employees').then(
            response => {
                console.log(response.data)
            }).catch( err => {
                console.error(err);
            })
    }, [])

    return (
        <Container id="employees-find-container">
            <Row>
                <h1>Buscar Empleados</h1>
            </Row>
        </Container>
    )
}

export default Employees
