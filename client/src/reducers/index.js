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
			return state.concat(
				action.payload
				);
		case DELETE_BOOK:
			
			return state.filter(function(el) {						
					    return el.id !== action.payload.id;
					});

		case LOAD_BOOKS:
			return state.books = action.payload;
		default:
			return state;
	}
};

export default rootReducer;