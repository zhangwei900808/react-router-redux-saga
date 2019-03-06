import React, { Component } from 'react';
import logo from './assets/imgs/logo.svg';
import './assets/css/App.css';
import './assets/css/test.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="test">
          测试
          <p>这是一篇文章</p>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
