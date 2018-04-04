import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './dev/reducers';

console.log("Hello from JSX!");

const store = createStore(
	allReducers, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render 
	(
		<Provider store={store}> 
			<App />
		</Provider>
		, document.getElementById('root')
	);

