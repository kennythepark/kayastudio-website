import React, { Component } from 'react';
import logo from './main_logo.gif';
import bg_img from './bg_image.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bg_img} className="App-background" alt="bg_image" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            FW 2019 | coming soon
          </p>
        </header>
      </div>
    );
  }
}

export default App;
