import React, { useState } from 'react'
import axios from 'axios'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { APIHOST as host } from '../../app.json'
import { isNull } from 'util'
import './login.css'
import { calculateExpirationSession } from '../helpers/helpers'
import Cookies from 'universal-cookie';
import Loading from '../loading/Loading'
const cookies = new Cookies();

const Login = props => {
    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState('')
    const [ pass, setPass ] = useState('')

    const initSession = e => {
        e.preventDefault();
        setLoading(true)
        axios.post(`${host}/users/login`,{ user, pass }).then( res => {
            if(isNull(res.data.token)) {
                cookies.remove("_s")
                alert("Usuario o contraseña no válidos")
            } else {
                cookies.set("_s", res.data.token, {
                    path: '/',
                    expires: calculateExpirationSession()
                })
                props.history.push('/employees')
            }
            setLoading(false)
        }).catch( err => {
            console.log(err)
            setLoading(false)
            cookies.remove("_s")
        })
    }

    return (
        <Container id="login-container">
            <Loading show={ loading }/>
            <Row>
                <Col>
                    <Row>
                        <h2>Iniciar Session</h2>
                    </Row>
                    <Row>
                        <Col sm="12" xs="12" md={{ span: 4, offset: 4  }} lg={{ span: 4, offset: 4  }} xg={{ span: 4, offset: 4  }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>usuario</Form.Label>
                                    <Form.Control onChange={ e => { setUser(e.target.value) } }/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Pass</Form.Label>
                                    <Form.Control type="password" onChange={ e => { setPass(e.target.value) } }/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={ initSession }>
                                    Iniciar Session
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
