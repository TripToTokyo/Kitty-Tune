import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
