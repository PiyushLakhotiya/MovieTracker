import React from 'react';
import classes from './Navbar.module.css'
import { Navbar, Nav } from 'react-bootstrap';

const navbar = props => (
    <Navbar bg="primary" expand="lg">
        <Navbar.Brand className = {classes.navbarBrand} >Website Name</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.nav}>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;