/**
 * Sample View
 * ---------------------
 *  
 */

import React from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js';
import getUserFromDB from '../../utilities/db_utilities.js'; 
import Toast from './../../components__widget/Toast/Toast.js'; 
import firebase from '../../services/firebase.js'; 

import './ViewProfile.css';

//Component ...
class ViewProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      db_user       : null,
      saving_data   : false,
      new_uname     : '',
      new_ubio      : '',
      new_uphone    : '',
      new_uvisible  : false
    }
    this.handleChange     = this.handleChange.bind(this);
    this.handleCbxChange  = this.handleCbxChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }


  handleChange(e) { 
    console.log('???????handleChange', e.target.name );
    let prop = 'new_'+e.target.name;
    // console.log('???????prop=', prop);
    this.setState({
      ['new_'+e.target.name] : e.target.value
    });
  }


  handleCbxChange(e) { 
    console.log('???????handleCbxChange', e.target.value );
    let prop = 'new_'+e.target.name;
    // console.log('???????prop=', prop);
    this.setState({
      ['new_'+e.target.name] : !this.state['new_'+e.target.name]
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({ saving_data : true });

    //USE REFERENCE ID HERE
    let userId = '-LAUDeojwWTo-cjee9hb';

    console.log('>>>this.state.db_user=' ,this.state.db_user);
    firebase.database().ref('users/' + userId).set(
      {
        uid           : this.state.db_user.uid,
        name          : this.state.new_uname,
        biography     : this.state.new_ubio,
        photoURL      : this.state.db_user.photoURL,
        email         : this.state.db_user.email,
        phoneNumber   : this.state.db_user.new_uphone,
        visible       : this.state.db_user.new_uvisible
      }, (error)=>{ 
        if(error){
          console.log('Couldn\'t save data');
        }
        else{
          // console.log("Data successfully");
          this.setState({ saving_data : false });
        } 
      }
    );
  }

  

  componentDidMount() {
    /**
     * ...
     */ 
    const loggedUser = this.props.user; 
     
    getUserFromDB(loggedUser).then((itemReady) => {
      console.log('???????itemReady=', itemReady);
      console.log('???????itemReady.displayName=', itemReady.displayName);
      let new_uphone = itemReady.phoneNumber ? itemReady.phoneNumber : loggedUser.phoneNumber;
      new_uphone = new_uphone ? new_uphone : '';
      this.setState({
        db_user       : itemReady,
        //Display saved username, otherwise display auth service object username
        new_uname     : itemReady.name ? itemReady.name : loggedUser.displayName,
        new_uphone     : new_uphone,

        new_ubio : itemReady.biography ? itemReady.biography : this.state.new_ubio
      }); 
    });
 
  }//[end] componentDidMount


  render() {
    const { user } = this.props;
    const { db_user, new_uname, new_ubio, new_uphone, new_uvisible, saving_data } = this.state;
    
    return(
      <Container>

        { /* Display a toast if the list of items is not yet ready */
          saving_data && <Toast msg={'Saving data'} /> 
        }
        <Row>
          <Col className="ViewProfile__maincol">
            <UserAvatar item={user} />
      
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="uname">User Name</Label>
                <Input type="text" name="uname" id="uname" value={new_uname} onChange={this.handleChange} placeholder="Enter your username" />
              </FormGroup>
  
              <FormGroup>
                <Label for="ubio">Biography</Label>
                <Input type="textarea" name="ubio" id="ubio" value={new_ubio} onChange={this.handleChange} placeholder="Enter a short biographie" />
              </FormGroup>
  
              <FormGroup>
                <Label for="uemail">Email</Label> 
                {
                  !db_user ? (
                    <Input type="email" name="uemail" id="uemail" placeholder="Enter your email" />
                  ) : (
                    <Input type="email" name="uemail" id="uemail" placeholder={db_user.email} readOnly/>
                  )
                }  
              </FormGroup>   
  
              <FormGroup>
                <Label for="uphone">Phone Number</Label> 
                <Input type="text" name="uphone" id="uphone" value={new_uphone} onChange={this.handleChange} placeholder="Enter your phone number" />
              </FormGroup>
   
              <FormGroup className="form-group" check>
                <Label check>
                  <Input type="checkbox" name="uvisible" id="uvisible" value={new_uvisible} onChange={this.handleCbxChange} />{' '}
                  Visible to everyone
                </Label>
              </FormGroup>
          
              <Button color="primary" block>Submit</Button>
   
            </Form> 
          </Col>
        </Row>
      </Container>
    ); 
  }//[end] render
}//[end] Profile

export default ViewProfile;