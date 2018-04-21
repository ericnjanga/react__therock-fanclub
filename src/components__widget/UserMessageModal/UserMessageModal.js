import React from 'react';
//...
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MessageForm from '../MessageForm/MessageForm';
import UserAvatar from '../UserAvatar/UserAvatar';
import './UserMessageModal.css';
import firebase from '../../services/firebase';


class UserMessageModal extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {  
      title:'',
      content: '' 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event, user) {
    event.preventDefault(); 

		//...
		const listRef = firebase.database().ref('board-msg');
		const item = { 
			title: this.state.title, 
      content: this.state.content, 
      uid : user.uid,
			date: Date.now() 
		}; 
		//... 
		listRef.push(item, (error)=>{  
			if(error){
				console.error('Error while pusing: ', error);
			}else{
				//... 
				this.setState((prevState, props) => {
					return {
						title: '',
						content: ''
					}
				}); 
			}
    });//[end] listRef.push
    
    //...
    this.props.toggle();
  }//[end] handleSubmit

  handleChange(event) { 
		this.setState({
			formDirty : true,
			[event.target.name] : event.target.value
		});
  }

  render() {
    const { user, isOpen, toggle } = this.props;
    const { title, content } = this.state; 
    return( 
      <Modal isOpen={isOpen} toggle={toggle} className={'UserMessageModal'}>
        <UserAvatar src={user.photoURL} alt={user.displayName} /> 
        <ModalHeader toggle={toggle}>Say somethig <b>{user.displayName}</b></ModalHeader>
        <ModalBody>
          <MessageForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} title={title} content={content} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(event)=>this.handleSubmit(event, user)}>Send your message</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    ); 
  }
}

export default UserMessageModal;