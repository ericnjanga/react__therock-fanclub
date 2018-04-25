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
import DBUser from '../../utilities/DBUser.class.js'; 

import './ViewProfile.css';

//Component ...
class ViewProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      profile : { 
        displayName     : '', 
        biography       : '',
        phoneNumber     : '',
        currentUser     : null,
        visible         : false
      },
      displayName     : '', 
      biography       : '',
      phoneNumber     : '',
      currentUser     : null,
      visible         : false,
      saving_data     : false,
    }
    this.handleChange     = this.handleChange.bind(this);
    this.handleCbxChange  = this.handleCbxChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }


  handleChange(e) { 
    console.log('???????handleChange', e.target.name ); 
    this.setState({
      [e.target.name] : e.target.value
    });
  }


  handleCbxChange(e) { 
    console.log('???????handleCbxChange', e.target.value ); 
    // console.log('???????prop=', prop);
    this.setState({
      [e.target.name] : !this.state[e.target.name]
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({ saving_data : true });

    // let record = {
    //   uid: this.state.currentUser.uid
    // };
    // console.log('...rec', record);



    DBUser.updateProfile(this.state).then((success)=>{
      console.log('success=', success, this);
      this.setState({
        saving_data     : false
      });
    });
 
  }//[end] handleSubmit


  componentWillMount() {
    this.setState({
      currentUser : DBUser.getCurrentUser()
    });
    console.log('>>>curr user =', DBUser.getCurrentUser() );
    console.log('>>>========' );

    // currentUser
  }

  
 

  render() {
    const { user } = this.props;
    const { currentUser, displayName, biography, phoneNumber, visible, saving_data } = this.state;
    
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
                <Label for="name">User Name</Label>
                <Input type="text" name="displayName" id="displayName" value={displayName} onChange={this.handleChange} placeholder="Enter your username" />
              </FormGroup>
  
              <FormGroup>
                <Label for="biography">Biography</Label>
                <Input type="textarea" name="biography" id="biography" value={biography} onChange={this.handleChange} placeholder="Enter a short biographie" />
              </FormGroup>
  
              <FormGroup>
                <Label for="email">Email</Label> 
                {
                  !currentUser ? (
                    <Input type="email" name="email" id="email" placeholder="Enter your email" />
                  ) : (
                    <Input type="email" name="email" id="email" placeholder={currentUser.email} readOnly/>
                  )
                }  
              </FormGroup>   
  
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label> 
                <Input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={this.handleChange} placeholder="Enter your phone number" />
              </FormGroup>
   
              <FormGroup className="form-group" check>
                <Label check>
                  <Input type="checkbox" name="visible" id="visible" value={visible} onChange={this.handleCbxChange} />{' '}
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