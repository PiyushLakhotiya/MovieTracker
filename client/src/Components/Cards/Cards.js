import React from 'react'
import Card from './Card/Card';
import {Container} from 'react-bootstrap';
import classes from './Cards.module.css';

const cards = props => {
    return (
        <Container className={classes.Container}>
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    );
}

export default cards;