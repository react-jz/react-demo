import React, { Component } from 'react';
import './App.css';
import Index from './components/Index/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          header
        </p>
        <Index />
      </div>
    );
  }
}

export default App;
