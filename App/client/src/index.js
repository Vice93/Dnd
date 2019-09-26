import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProviders from './providers/AppProviders'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)