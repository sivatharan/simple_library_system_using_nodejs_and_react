/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */

import React from 'react';
import { connect } from 'react-redux';
import { deleteBook } from './actions/index';

class BookDetail extends React.Component {

    constructor(props) {
        super(props);

    }
  
	handleDelete(book) {
        console.info(book.Target);
        // this.props.deleteBook(this.props.book);
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


BookDetail.propTypes = {

};

function mapStateToProps(state, ownProps) {
    console.info(ownProps);
    return {
        book: ownProps.book
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteBookFromList: book => dispatch(deleteBook(book))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
