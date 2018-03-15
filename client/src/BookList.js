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
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(e) {
		console.info(this.state.booklist);
		// this.state.booklist.push({id:29,code:'sdsd',title:'book 3'});
		// this.state.newBook = '';
		// console.info(this.state.booklist);
		// handleChange(e);
	    axios.post(baseUrl+'/add', {
		    title: this.state.newBook,
		  })
		  .then(function (res) {
		  	// console.info(this.state.booklist);
		  	this.setState({ 
			  booklist: this.state.booklist.concat([res.data.result])
			});
			// this.state.booklist.push(res.data.result);
		  })
		  .catch(function (error) {
		    console.log(error);
		});
	}

    render() {

        return (
            <div className="container card">

            	<header className="card-header">
			      Library System
			    </header>
            	<div className="column is-desktop is-vcentered">
	            	<div className="columns">
		            	<div className="column">
		            		<div className="field has-addons">
							  <div className="control">
							    <input className="input" type="text" placeholder="Add Book" onChange={this.handleChange} value={this.state.newBook}/>
							  </div>
							  <div className="control">
							    <button className="button is-info" onClick = {this.handleSubmit} disabled={!this.state.newBook}>
							      Add
							    </button>
							  </div>
							</div>
		            	</div>
	            	</div>
	            	{ this.state.booklist.length > 0 ?
	            	<div className="columns  is-centered">
	            	
		            	<div className="column">
		            		<table className="table is-bordered is-centered">
		            		<thead>
		            			 <tr>
					                <th>No</th>
					                <th>Code</th>
					                <th>Name</th>
					                <th>Action</th>
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
	            	 :
            		<h2> No record found</h2>
	            }
            	</div>
            </div>
        );
    }
};