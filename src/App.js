import React, { Component } from 'react';
import Index from './components/index'
import './App.css';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Index />
      </div>
    );
  }
}

export default App;
