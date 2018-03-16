
/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import configureStore from './store/index';

import {loadBooks} from './actions/index';

const store = configureStore();

store.dispatch(loadBooks());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
