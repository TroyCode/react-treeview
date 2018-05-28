import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Uncontrolled from './uncontrolled';
import Controlled from './controlled';

ReactDOM.render(<Uncontrolled />, document.getElementById('uncontrolled'));
ReactDOM.render(<Controlled />, document.getElementById('controlled'));
