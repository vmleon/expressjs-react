import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
