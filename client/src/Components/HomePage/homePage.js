import React, { Component } from 'react'
import axios from 'axios';
import Card from '../card3/card3';


export class homePage extends Component {
    state ={
        movieData: []
    }
    componentDidMount(){
        axios.get('http://localhost:5000/', {   
                headers: { 
                    'content-type': 'application/json',
                    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGVmYWM4MmU2ZmVkM2NiZDEzYWU0YyIsImlhdCI6MTYwODQ0ODcxMiwiZXhwIjoxNjA4NDUyMzEyfQ.CbSoR6RS1DhS9RL5HuMIVUeljGxCNZoqT5lMJqtC8NY'
                }
            })
            .then(res => this.setState({movieData: res.data}));
    }

    render() {
        console.log(this.props.location);
        // let CardsJSX = this.state.movieData.map(movie => {
        //     return (
        //         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        //             <Card description={movie.description} img={movie.poster} />
        //         </div>
        //     );
        // })
        return (
            <div className="container" style={{'marginTop': '100px'}}>
                <div className="row">
                    {
                        this.state.movieData.map(movie => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <Card 
                                        description={movie.description} 
                                        img={movie.poster} 
                                        genre={movie.genre} 
                                        title={movie.title}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default homePage
