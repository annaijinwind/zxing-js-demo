import React, { Component } from 'react';
import './App.css';
import Home from '../src/pages/Home'
import Scan from '../src/pages/Scan'
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/scan" component={Scan} />
      </BrowserRouter>
    )
  }
}


export default App;
