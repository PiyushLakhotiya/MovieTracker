import React from 'react';
import classes from './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const navbar = props => (
    <div className="navigation">
    <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand >YMDb</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link ><Link to = "home">Home</Link></Nav.Link>
                    <Nav.Link ><Link to ="/add">Add</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>

)

export default navbar;