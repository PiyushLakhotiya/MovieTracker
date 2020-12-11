import React from 'react';
import classes from './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar = props => (
    <div className="navigation">
    <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand >YMDb</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>

)

export default navbar;