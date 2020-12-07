import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';

import Form from './Containers/Form/Form';

class App extends Component {
  render() {
    return (
    <>
      <Navbar />
      {/* <Cards /> */}
      <Form />
    </>
    );
  }
}

export default App;
