import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StateExample from './components/StateExample';

const rootElement = document.getElementById('root');


/*
ReactDOM.render(<App headerTitle = "Welcome!"
					contentTitle = "5"
					contentBody = "Welcome to example app"/>, rootElement);
*/

 //ReactDOM.render(<StateExample />, rootElement);


ReactDOM.render(<App />, rootElement);