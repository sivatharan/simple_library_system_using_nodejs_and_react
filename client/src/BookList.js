/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import React from 'react';
import axios from 'axios';
import BookDetail from './BookDetail';

import { connect } from 'react-redux';
import { addBook } from './actions/index';
const baseUrl = 'http://localhost:9000/api/book';

class BookList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			booklist: this.props.books,
			newBook: ''
		};
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		
	}

	handleChange(e) {
		this.setState({ 
			newBook: e.target.value
		});
	}

	handleSubmit(e) {
		axios.post(baseUrl+'/add', {
		    title: this.state.newBook,
		  })
	      .then(res => {
	      	this.props.addBookToList(res.data.result); // TODO: important method
	        this.setState({ 
			newBook: ''
		});
		}).catch(a => {
			console.log(a);
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
	            	{ this.props.books.length > 0 ?
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
		            				this.props.books.map(function(value, index){
		            					return <BookDetail key={index} index_key={index} book={value}  />
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


BookList.propTypes = {

};

function mapStateToProps(state, ownProps) {
	return {
		books: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addBookToList: book => dispatch(addBook(book))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
