import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/fonts.css';
import './vendor/normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
