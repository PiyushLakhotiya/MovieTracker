import React , { Component } from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import './AddForm.css'
import checkIcon from '../../check-circle-solid.svg'

import axios from 'axios';

class AddForm extends Component {
    state = {
        title: '',
        type: 'movie',
        category: '',
        description: '',
        discription: '',
        url: '',
        name: '',
        cardsJSX: []
    }

    // onChangedHandler = (event, name) => {
    //     this.setState(
    //         { [name] : event.target.value }
    //     );
    // }

    sendData = async (data) => {
        let img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        let name;
        if(this.state.type === 'tv')
            name = data.name;
        else
            name = data.title;
        const dataObj = {
            title: name,
            description: data.overview,
            category: this.state.category,
            type: this.state.type,
            title_id: data.id,
            poster: img
        }
        await axios.post('http://localhost:5000/post', dataObj)
            .then((data) => console.log(data))
            .catch(error => console.log(error.message));
    }

    onSubmit = async (event) => {
        event.preventDefault();
        let a = encodeURI(this.state.title)
        let apiUrl = `https://api.themoviedb.org/3/search/${this.state.type}?api_key=da6c65cb9b8595562d8ed2df20cec5cd&language=en-US&page=1&query=${a}&include_adult=false`
         await axios.get(apiUrl)
            .then(res => {
                     let cardsJSX = res.data.results.map(data => {
                        let img = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
                        return (
                                data.poster_path ? 
                                (
                                    <div className="col-12 col-md-3" key={data.id}> 
                                        <a onClick={() => this.sendData(data)}>
                                            <div className="b-game-card" >
                                                <img className="b-game-card__cover" src={img}/>
                                            </div>
                                        </a>
                                    </div>
                                ) : null
                        );
                    })
                    this.setState({cardsJSX: [...cardsJSX]})
        }).catch(err => console.log("error is " ,err))
    }   
    render() {
            
        let img = `https://image.tmdb.org/t/p/w500${this.state.url}`;
        return(
            <div className="container">
            <div className="addForm mt-5">
               <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Type</Form.Label> */}
                        <Form.Control as="select" size="md" onChange={(event) => this.setState({type: event.target.value})}>
                            <option value="movie">Movie</option>
                            <option value="tv">TV Show/Series</option>
                            <option>Anime</option>
                        </Form.Control>
                    </Form.Group> 

                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Title</Form.Label> */}
                        <Form.Control type="text" placeholder="Title..." onChange={(event) => this.setState({title: event.target.value})}/>
                    </Form.Group>     

                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Category</Form.Label> */}
                        <Form.Control as="select" size="md" onChange={(event) => this.setState({category: event.target.value})}>
                            <option value="Netflix">Netflix</option>
                            <option value="Hollywood">Hollywood</option>
                            <option value="Bollywood">Bollywood</option>
                            <option value="Tollywood">Tollywood</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="addFormButton">
                        Submit
                    </Button>
                </Form>
                </div>
                <i className="fas fa-check-circle"></i>

                <div className="row mt-4 d-flex justify-content-center align-items-center">
                    {this.state.cardsJSX}
                </div>

            </div>


        )
    }
}

export default AddForm;