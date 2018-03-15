/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookDetail from './BookDetail';

import { connect } from 'react-redux';

const baseUrl = 'http://localhost:9000/api/book';

export default class BookList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			booklist: [],
			newBook: ''
		};
	}

	componentDidMount() {

	  axios.get(baseUrl+'/list')
	      .then(res => {
	        this.setState({ booklist: res.data.result });
	  });
	}

	handleChange(e) {
		this.setState({ 
			newBook: e.target.value
		});
	}

	handleSubmitClick(e) {

	    axios.post(baseUrl+'/add', {
		    title: this.state.newBook,
		  })
		  .then(function (res) {
		  	this.setState({ 
			  booklist: this.state.booklist.concat([res.data.result])
			});
		  })
		  .catch(function (error) {
		    console.log(error);
		});
	}

    render() {

        return (
            <div className="container">
            	<div className="column is-desktop is-vcentered">
	            	<div className="columns">
		            	<div className="column">
		            		<div className="field has-addons">
							  <div className="control">
							    <input className="input" type="text" placeholder="Add Book" onChange={this.handleChange.bind(this)} value={this.state.newBook}/>
							  </div>
							  <div className="control">
							    <a className="button is-info" onClick = {this.handleSubmitClick.bind(this)}>
							      Add
							    </a>
							  </div>
							</div>
		            	</div>
	            	</div>

	            	<div className="columns is-desktop is-vcentered">
		            	<div className="column">
		            		<table className="table is-bordered">
		            		<thead>
		            			 <tr>
					                <td>No</td>
					                <td>Code</td>
					                <td>Name</td>
					                <td>Action</td>
					            </tr>
		            		</thead>
		            		<tbody>
		            			{	
		            				this.state.booklist.map(function(value, index){
		            					return <BookDetail key={index} book={value}  />
		            				})
		            			}
		            		</tbody>
		            	</table>
		            	</div>
	            	</div>
            	</div>
            </div>
        );
    }
};