import React from 'react';
import ReactDOM from 'react-dom';
import RouteProvider from './route.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>,
  document.getElementById('root')
);