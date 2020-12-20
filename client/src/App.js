import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
// import Cards from './Components/Cards/Cards';
import AddPage from './Components/AddForm/AddForm';
import LoginPage from './Components/LoginSignup/loginPage';
import SignupPage from './Components/LoginSignup/SignupPage';
import HomePage from './Components/HomePage/homePage'
import DropDownPage from './Components/DropDownPages/dropDownPage';
// import Form from './Containers/Form/Form';

class App extends Component {
  render() {
    return (
    <>
      <Navbar/>
      <Switch>
        {/* <Route exact path="/" component={Cards}></Route> */}
        <Route path = "/home" component={HomePage}></Route>
        <Route path = "/add"  component={AddPage}></Route>
        <Route path = "/login" component={LoginPage}></Route>
        <Route path = "/signup" component={SignupPage}></Route>
        <Route path = "/movies" render={props => <DropDownPage type="movies" />}/>
        <Route path = "/tvshows" render={props => <DropDownPage type="tvshows" />}/>
        <Route path = "/anime" render={props => <DropDownPage type="anime" />}/>
      </Switch>
    </>
    );
  }
}

export default App;

// <Route path = "/movies" render={props => <DropDownPage type="movies" />} component = {DropDownPage} />
//         <Route path = "/tvshows" component = {DropDownPage} />
//         <Route path = "/anime" component = {DropDownPage} />