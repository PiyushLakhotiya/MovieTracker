import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import AddPage from './Components/AddForm/AddForm';
import LoginPage from './Components/LoginSignup/loginPage';
import SignupPage from './Components/LoginSignup/SignupPage';
import HomePage, { homePage } from './Components/HomePage/homePage'
// import Form from './Containers/Form/Form';

class App extends Component {
  render() {
    return (
    <>
      <Navbar/>
      <Switch>
        {/* <Route exact path="/" component={Cards}></Route> */}
        <Route path="/add" component={AddPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
      </Switch>
    </>
    );
  }
}

export default App;
