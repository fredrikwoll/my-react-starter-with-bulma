import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import "./scss/main.scss";
import App from './App'


ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'))
registerServiceWorker()
module.hot.accept();


