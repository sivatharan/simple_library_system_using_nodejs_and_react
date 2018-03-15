/**
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import 'bulma/css/bulma.css';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import BookList from './BookList';

class App extends Component {
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

export default App;
