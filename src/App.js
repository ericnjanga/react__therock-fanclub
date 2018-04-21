/**
 * Main Application
 * ---------------------------
 */

//Imports React packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Firebase Packages ...
import { auth, provider } from './services/firebase.js';

//Import global components
import MainHeader from './components__global/MainHeader/MainHeader.js';
import MainFooter from './components__global/MainFooter.js';

//Import view components
import ViewAll from './components__view/ViewAll.js'; 

//Import widget components
import Toast from './components__widget/Toast/Toast.js'; 



//Main styles
import './App.css';
import updateRecordInfo from './utilities/updateUserInfo.js';


//Main App class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      navIsActive: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleCloseNav = this.handleCloseNav.bind(this);
  }

  //Shell login method
  handleLogin() { 
    auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
      
      //Save user record in the database
      const newRec = {
        uid : user.uid,
        photoURL : user.photoURL,
        email : user.email
      };
      updateRecordInfo('users', newRec, 'uid');
      //.... 
      
    });//[end] user successful login
  }

  //Shell logout method
  handleLogout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null,
        navIsActive: false
      });
    });  
  } 

  handleToggleNav(){  
    this.setState({
      navIsActive: !this.state.navIsActive
    });
  }

  //When we want the nav to be explicitely closed
  handleCloseNav(){
    if(this.state.navIsActive){
      this.setState({
        navIsActive: false
      });
    } 
  }

  componentDidMount(){
    //Checks every single time the app loads to see if the user 
    //was already signed in last time they visited your app. 
    //If they were, sign them back in.
    auth.onAuthStateChanged((user) => { 
      this.setState({ user });  
    });

    //Make sure main navigation is closed each time
    //the app's body is clicked
    const this_node = ReactDOM.findDOMNode(this);
    const node_main_header = document.querySelector('.app-header');
    this_node.addEventListener("click", (event) => {
      const click_in_header = event.path.indexOf(node_main_header);
      if(click_in_header < 0){
        this.handleCloseNav();
      } 
    });


  }//[end]componentDidMount
  
  render() {
    const { user } = this.state;
    const { navIsActive } = this.state;
    return (
      <Router>
        <div className="App"> 
          <MainHeader user={user} onLogout={this.handleLogout} 
          onToggleNav={this.handleToggleNav} navIsActive={navIsActive} onCloseNav={this.handleCloseNav} />
          <section className="App__content">
          {
            user===undefined && <Toast msg={'Loading your preferences'} />
          } 
          {
            user!==undefined && <ViewAll user={user} onLogin={this.handleLogin} />
          }
          </section>
          <MainFooter />
        </div>
      </Router>
    );
  }
}



export default App;