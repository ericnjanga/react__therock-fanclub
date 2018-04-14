/**
 * Main Application
 * ---------------------------
 */

//Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import './App.css';

//Import view components
import PageAbout from './components__view/PageAbout.js';
import PageArticles from './components__view/PageArticles.js';
import PageGallery from './components__view/PageGallery.js';
import PageHome from './components__view/PageHome.js';
import PageLogin from './components__view/PageLogin.js';
import PageTermsAndConditions from './components__view/PageTermsAndConditions.js';

//Main App class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  //Shell login method
  login() {
    this.setState({
      user: {id:'user1', name:'Nkounda Njanga', email:'nknj@gmail.com'}
    });
  }

  //Shell logout method
  logout() {
    this.setState({
      user: null
    });
  }
  
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App__header"> 
            <h1 className="App-title">The Rock <small>Fan Clucb</small></h1>
            {
              //Display "full nav" (and logout button) only if user is logged in
              user ? (
                <nav className="App__nav">
                  <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/articles`}>Articles</Link></li>
                    <li><Link to={`/gallery`}>Gallery</Link></li>
                  </ul>
                  <button className="App__btnLogout" onClick={this.logout}>Logout</button>
                </nav>
              ) : (
                //Display only "login" button only if user is logged out
                <nav className="App__nav">
                  <ul> 
                    <li><Link to={`/login`}>Login</Link></li> 
                  </ul> 
                </nav>
              )
            } 
          </header>
          <section className="App__content"> 
            {/* Read README.md file for route rules (Setting up routes and shell login/logout system)*/} 
            <Route exact path="/login" render={() => (
              !user && <PageLogin onLogin={this.login} />
            )}/>
            
            <section> 
              {/* Render [login view] only if user is logged out */}
              <Route exact path="/" render={() => (
                !user ? (
                  <div className="l1"><Redirect to="/login"/></div>
                ) : (
                  <Route path="/" exact={true} component={PageHome} />
                )
              )}/>
 
              {/* Don't Render [login view] if user is logged in */
                user && <Route exact path="/login" render={() => (
                  <Redirect to="/"/>
                )}/>
              }
  
              {/* Render views (if logged in) / [login view] (if logged out) */}
              {/* --- [about view] --- */}
              <Route exact path="/about" render={() => (
                !user ? (
                  <Redirect to="/login"/>
                ) : (
                  <Route path="/about" exact={true} component={PageAbout} />
                )
              )}/>
 
              {/* --- [articles view] --- */}
              <Route exact path="/articles" render={() => (
                !user ? (
                  <Redirect to="/login"/>
                ) : (
                  <Route path="/articles" exact={true} component={PageArticles} />
                )
              )}/>
 
              {/* --- [gallery view] --- */}
              <Route exact path="/gallery" render={() => (
                !user ? (
                  <Redirect to="/login"/>
                ) : (
                  <Route path="/gallery" exact={true} component={PageGallery} />
                )
              )}/>
              {/* Render views (if logged in) / [login view] (if logged out) */}


              {/* Render [terms & conditions view] at anytime */}
              <Route path="/terms-and-cnditions" exact={true} component={PageTermsAndConditions} />
            </section>
          </section>
          <footer className="App__footer">
            <p><Link to={`/terms-and-cnditions`}>Terms &amp; Conditions</Link></p>
          </footer>
        </div>
      </Router>
    );
  }
}



export default App;
