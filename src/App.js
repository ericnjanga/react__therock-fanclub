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
import VerticalNav from './components__global/VerticalNav/VerticalNav.js';
import MainFooter from './components__global/MainFooter.js';
import MenuPrimary from './components__global/MenuPrimary.js';
import MenuSecondary from './components__global/MenuSecondary.js';

//Import view components
import ViewAll from './components__view/ViewAll.js'; 

//Import widget components
import Toast from './components__widget/Toast/Toast.js'; 



//Main styles
import './styles/App.css';
import updateRecordInfo from './utilities/updateUserInfo.js';


//Main App class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      vertNavIsActive: false
    }
    this.handleLogin          = this.handleLogin.bind(this);
    this.handleLogout         = this.handleLogout.bind(this);
    this.handleToggleVertNav  = this.handleToggleVertNav.bind(this);
    this.handleCloseVertNav       = this.handleCloseVertNav.bind(this);
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
        vertNavIsActive: false
      });
    });  
  } 

  handleToggleVertNav(){  
    this.setState({
      vertNavIsActive: !this.state.vertNavIsActive
    });
  }

  //When we want the nav to be explicitely closed
  handleCloseVertNav(){
    if(this.state.vertNavIsActive){
      this.setState({
        vertNavIsActive: false
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
  }//[end]componentDidMount
  
  render() {
    const { user } = this.state;
    const { vertNavIsActive } = this.state;
    return (
      <Router>
        <div className="App"> 
          <MainHeader user={user} onLogout={this.handleLogout} 
          onToggleVertNav={this.handleToggleVertNav}
          onCloseVertNav={this.handleCloseVertNav}>
            <MenuPrimary />
          </MainHeader>

          {
            user && <VerticalNav user={user} isActive={vertNavIsActive} 
            onCloseVertNav={this.handleCloseVertNav}>
              <MenuPrimary />
              <hr className="hr-menu" />
              <MenuSecondary onLogout={this.handleLogout} />
            </VerticalNav>
          }
          
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