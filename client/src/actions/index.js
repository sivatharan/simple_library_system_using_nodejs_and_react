/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */

import { LOAD_BOOKS, ADD_BOOK, DELETE_BOOK } from '../constants/action-types';

import bookApi from '../api/bookApi';

export function loadBookSuccess(books) {
  return {type: LOAD_BOOKS, payload: books};
}

export function deleteBookSuccess(books) {
  return {type: DELETE_BOOK, payload: books};
}

// export const addBook = book => ({ type: "ADD_BOOK", 
// payload: book });

export function addBookToList(book) {
	return {type: ADD_BOOK, payload: book}
}

export function addBook(book) {
		return function(dispatch) {
			dispatch(addBookToList(book));
		}
}

export function loadBooks() {
	return function(dispatch) {
		return bookApi.getAllBooks().then(books => {
			dispatch(loadBookSuccess(books));
		}).catch(error => {
			throw(error);
		});
	}
}

export function deleteBook(book) {
	return function(dispatch) {
		return bookApi.deleteBook(book).then(books => {
			dispatch(deleteBookSuccess(books));
		}).catch(error => {
			throw(error);
		});
	}
}