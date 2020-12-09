import React , { Component } from 'react';
import Input from '../../Components/Input/Input';
import classes from './Form.module.css';

import axios from 'axios';

class Form extends Component {
    state = {
        title: '',
        type: '',
        description: '',
        genre: '',
        api_key: 'cb2618210b01a948b2a5286ab2820f23'
    }
        
    onChangedHandler = (event, name) => {
        this.setState(
            { [name] : event.target.value }
        );
        console.log(event.target.name);
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
                changed = {(event) => this.onChangedHandler(event, 'title')}
                />
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
                type="text" 
                placeholder="description" 
                name="description" 
                label = "Description" 
                changed = {(event) => this.onChangedHandler(event, 'description')}/>
            <Input 
                type="text" 
                placeholder="Sci-fi, Action, Adventure etc." 
                name="genre" 
                label = "Genre" 
                changed = {(event) => this.onChangedHandler(event, 'genre')}/>
            
            <Input 
                type="submit" />
        </form>
        )
    }
}

export default Form;