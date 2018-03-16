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
        this.props.deleteBookFromList(this.props.index, this.props.book);
	}

    render() {
        return (
            <tr>
                <td>{this.props.index_key+1}</td>
                <td>{this.props.book.code}</td>
                <td>{this.props.book.title}</td>
                <td className="deleteBook"><span onClick={this.handleDelete.bind(this)} className="delete">&times;</span></td>
            </tr>
        );
    }

};


BookDetail.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {
        book: ownProps.book,
        index: ownProps.index_key
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteBookFromList: (index, book) => dispatch(deleteBook(index, book))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
