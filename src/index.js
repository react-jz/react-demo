import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();

//import styles
import 'weui';

{/*<Provider store={store}>*/}
{/*<App />*/}
{/*</Provider>,*/}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
