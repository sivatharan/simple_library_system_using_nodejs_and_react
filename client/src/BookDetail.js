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
        console.info(book);
	}

    render() {
        return (
            <tr>
                <td>{this.props.book.id}</td>
                <td>{this.props.book.code}</td>
                <td>{this.props.book.title}</td>
                <td className="deleteBook"><span onClick={this.handleDelete.bind(this.props.book)} className="delete">&times;</span></td>
            </tr>
        );
    }

};
