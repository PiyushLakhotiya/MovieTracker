import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './loginSignupPage.css'

export class SignupPage extends Component {
   state={
        email: "",
        password: ""
    }

    onChangeHandler = (event) => {
        let type = event.target.type;
        let value = event.target.value;
        this.setState({[type] : value});
    }

    render() {
        return (
            <div className="loginPage">
            <div className="container">
                <h2 className="YMDb">YMDb</h2>
                <div className="loginForm">
                    <Form className="form">
                        <h2 className="text-center mb-0">SignUp</h2>
                        <p className="text-center mb-4">Create your account to get started!!</p>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            required
                            placeholder="Enter email" 
                            onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            required
                            placeholder="Password"
                            onChange={this.onChangeHandler}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="loginBtn mt-2">
                            Login
                        </Button>
                        <p className="mt-2">Already have an account? <NavLink to="/login">Login</NavLink></p>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}

export default SignupPage
