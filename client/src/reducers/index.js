/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */

import { ADD_BOOK, LOAD_BOOKS, DELETE_BOOK } from '../constants/action-types';

const initialState = {
	books: []
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_BOOK:
		console.log(state);
			return state.concat(
				action.payload
				);
		case DELETE_BOOK:
			return state.books = action.payload;
		case LOAD_BOOKS:
			return state.books = action.payload;
		default:
			return state;
	}
};

export default rootReducer;