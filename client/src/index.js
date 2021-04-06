import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ContextProvider} from './SocketContext';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

