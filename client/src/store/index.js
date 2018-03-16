/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

export default function configureStore() {
	return createStore(
		rootReducer, 
		applyMiddleware(thunk)
		);
}