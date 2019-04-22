import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="home">
            <h1>Home page</h1>
            <Link to='/contacts'>
            <button className="use-button"> List contact</button>
            </Link>
            <Link to='/addconatct'>
            <button className="use-button"> Add contact</button>
            </Link>
           



        </div> );
    }
}
 
export default Home ;