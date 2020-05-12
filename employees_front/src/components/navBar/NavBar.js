import React from 'react'
import { Navbar, DropdownButton, Dropdown, Nav, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import './navBar.css'
const cookies = new Cookies();
const NavBar = () => {

    const logOut = () => {
        cookies.remove('_s')
        window.location.reload()
    }

    return (
        <Navbar id="nabvar" bg="primary" variant="dark" fixed="top">
            <Navbar.Brand href="#home">HR <span id="navbar-sub-brand">Recursos Humanos</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <DropdownButton drop="left" title="">
                <Dropdown.Header id="dropdown-header">
                    <Row>
                        <FontAwesomeIcon icon={ faUserCircle } />
                    </Row>
                    <Row>
                        ##USERNAME##
                    </Row>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={ logOut }>Cerrar Sesión</Dropdown.Item>
            </DropdownButton>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
