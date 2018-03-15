/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {  
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';


export default  class BookDetail extends React.Component {
	handleDelete(book) {
        const reducers = combineReducers({  
          book:book
        });
        createStore(reducers, {});
	}

    render() {
        return (
            <tr>
                <td>{this.props.book.id}</td>
                <td>{this.props.book.code}</td>
                <td>{this.props.book.title}</td>
                <td><span onClick={this.handleDelete.bind(this)}>&times;</span></td>
            </tr>
        );
    }

};
