import React from 'react';

import './ViewMessageBoard.css'; 

import MessageForm from './../../components__widget/MessageForm/MessageForm.js'; 
import UserMessageList from './../../components__widget/UserMessageList/UserMessageList.js'; 
import UserMessageModal from './../../components__widget/UserMessageModal/UserMessageModal.js'; 
import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'; 
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'; 

import therock_img from './../../images/therock-1.jpeg'; 
//...
import { Button } from 'reactstrap';

class ViewMessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false 
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 
  render() {
    const { user } = this.props;
    return(
      <div className="ViewMessageBoard">
        <figure className="ViewMessageBoard__fig">
          <img src={therock_img} alt="The Rock" />
          <figcaption>TheRock (Dwayne Johnson)</figcaption>
        </figure>
         
        <UserMessageList />
       
        <Button color="primary" onClick={this.toggle}>
          <span>Write a Message</span> <FontAwesomeIcon icon={faPencil} />
        </Button>

        <UserMessageModal user={user} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} />
      </div>
    ); 
  }
}

export default ViewMessageBoard;