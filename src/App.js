import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom'

import routes from './routes';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Route 1</Link>
        <Link to="/2">Route 2</Link>
        <Link to="/3">Route 3</Link>
        { routes }
      </div>
    </HashRouter>
    );
  }
}

export default App;