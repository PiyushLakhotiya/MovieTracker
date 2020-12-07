import React , { Component } from 'react';
import Input from '../../Components/Input/Input';
import classes from './Form.module.css';

import axios from 'axios';

class Form extends Component {
    state = {
        title: '',
        type: '',
        description: '',
        genre: ''
    }

    onChangedHandler = (event, name) => {
        this.setState(
            { [name] : event.target.value }
        );
    }
    onSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        await axios.post('http://localhost:5000/post', data)
            .then(() => console.log(data))
            .catch(error => console.log(error.message));
    }   
    render() {
        return(
        <form className={classes.Form} onSubmit = {(event) =>this.onSubmit(event)}>
            <Input 
                type="text"
                placeholder="eg. Inception, 13 Reason Why etc,"
                name="title" 
                label = "Movie/Show Name" 
                changed = {(event) => this.onChangedHandler(event, 'title')}/>
            <Input 
                type="text" 
                placeholder="eg. Hollywood, Anime, Netflix etc." 
                name="type" 
                label = "Movie/Show Type" 
                changed = {(event) => this.onChangedHandler(event, 'type')} />
            <Input 
                type="text" 
                placeholder="Completed / Ongoing " 
                name="status" 
                label = "Status" 
                changed = {(event) => this.onChangedHandler(event, 'status')}/>
            <Input 
                type="submit" />
        </form>
        )
    }
}

export default Form;