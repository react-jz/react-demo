import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './components/PeopleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h2>7</h2>
        </div>
        <p className="App-intro">
          hellos
        </p>
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
