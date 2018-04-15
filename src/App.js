/**
 * Main Application
 * ---------------------------
 */

//Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

//Import global components
import MainHeader from './components__global/MainHeader.js';
import MainFooter from './components__global/MainFooter.js';
//Import view components
import ViewAll from './components__view/ViewAll.js'; 
import ViewLogin from './components__view/ViewLogin.js';


//Main App class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //Shell login method
  handleLogin() {
    this.setState({
      user: {id:'user1', name:'Nkounda Njanga', email:'nknj@gmail.com'}
    });
  }

  //Shell logout method
  handleLogout() {
    this.setState({
      user: null
    });
  }
  
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div className="App"> 
          <MainHeader user={user} onLogout={this.handleLogout} />
          <section className="App__content">
            <ViewAll user={user} onLogin={this.handleLogin} /> 
          </section>
          <MainFooter />
        </div>
      </Router>
    );
  }
}



export default App;
