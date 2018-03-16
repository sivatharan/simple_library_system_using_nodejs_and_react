/**
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import BookList from './BookList';


export default class App extends Component {
  render() {
    return (
      <div className="container">
          <Router>
            <div>
              <Route exact to="/" component={BookList}/>
            </div>
          </Router>
      </div>
    );
  }
}
