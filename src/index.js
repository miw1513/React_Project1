import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router , Link , Route} from 'react-router-dom'
import Home from './Component/Home'

ReactDOM.render(
   <App/>, document.getElementById('root'));
registerServiceWorker();
