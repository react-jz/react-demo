import React, { Component } from 'react';
import './App.css';
// import Home from './components/Home/home'
// import Index from './components/Index/index';
import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Home/>*/}
        {/*<Index />*/}
        <Routes/>
      </div>
    );
  }
}

export default App;
