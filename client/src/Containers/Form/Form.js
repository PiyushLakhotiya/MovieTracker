import React , { Component } from 'react';
import Input from '../../Components/Input/Input';
import classes from './Form.module.css';

class Form extends Component {
    render() {
        return(
        <>
        <form className={classes.Form} action="/3001" method="get">
            <Input type="text" placeholder="eg. Inception, 13 Reason Why etc," label = "Movie/Show Name"/>
            <Input type="text" placeholder="eg. Hollywood, Anime, Netflix etc." label = "Movie/Show Type"/>
            <Input type="text" placeholder="Completed / Ongoing " label = "Status"/>
            <Input type="submit" />
        </form>
        </>
        )
    }
}

export default Form;