import React from 'react';
import './Navbar.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const navbar = props => (
    <div className="navigation">
    <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand >YMDb</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">

            <NavDropdown className="ml-auto" title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href = '/movies'>
                    <Nav.Link href = '/movies' >Movies</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href = '/tvshows'>
                    <Nav.Link href = '/tvshows'>TV Shows</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href = '/anime'>
                    <Nav.Link href = '/anime'> Anime </Nav.Link>
                </NavDropdown.Item>
            </NavDropdown>

            <Nav >
                <Nav.Link >
                    <NavLink to = {{pathname: '/home'}}>Home</NavLink>
                </Nav.Link>
                <Nav.Link >
                    <NavLink to = {{pathname: '/add', aboutProps: {data: '123'}}}>Add</NavLink>
                </Nav.Link>
            </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>

)

export default navbar;