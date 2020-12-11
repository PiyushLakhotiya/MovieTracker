import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';
import Form1 from './Components/AddForm/AddForm';
// import Form from './Containers/Form/Form';

class App extends Component {
  render() {
    return (
    <>
      <Navbar />
      <Cards />
      <Form />
    </>
    );
  }
}

export default App;
