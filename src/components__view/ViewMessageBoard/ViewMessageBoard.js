import React from 'react';
import MessageForm from './../../components__widget/MessageForm/MessageForm.js'; 
import UserMessage from './../../components__widget/UserMessage/UserMessage.js'; 
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

  // const ViewMessageBoard = (props) => {
  render() {
    return(
      <div>
        <p>Message Board</p>
        <MessageForm />
        <UserMessage />




        {/* --------- */}
        <Button color="primary" onClick={this.toggle}>Write a Message</Button>
        {
          /**<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */
        }



      </div>
    ); 
  }
}

export default ViewMessageBoard;