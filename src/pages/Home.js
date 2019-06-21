import React, { Component } from 'react';
import '../css/Home.css'
import { getQueryStringByName } from '../utils/utils';
class Home extends Component {
  state = {}
  render() {
    return (
      <div className="main">
        <a href='/scan'>
        <div className="btnTop">
          <img src={require("../assets/images/scan.png")} className="imgTop" alt=""></img>
        </div>
        </a>
      </div>);
  }
  componentDidMount() {
    console.log(getQueryStringByName(this,'svs'))
  }
}

export default Home;