import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './dev/reducers';

console.log("Hello from JSX!");

<<<<<<< HEAD
const store = createStore(
	allReducers, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
=======
const store = createStore(allReducers);


>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d

ReactDOM.render 
	(
		<Provider store={store}> 
			<App />
		</Provider>
		, document.getElementById('root')
	);

