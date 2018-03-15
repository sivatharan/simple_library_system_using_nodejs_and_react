/*
 * @author A.Sivatharan
 * created on 15.03.2018
 */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return (
            <div>
               <Link to="/book">Load books</Link>
            </div>
        );
    }
}