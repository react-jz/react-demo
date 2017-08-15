import React, { Component } from 'react';
import './App.css';
import Index from './components/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          hello
        </p>
        <Index />
      </div>
    );
  }
}

export default App;
