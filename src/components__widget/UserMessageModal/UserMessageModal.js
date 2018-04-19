import React from 'react';
//...
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserMessageModal = (props) => { 
  const { user, isOpen, toggle, className } = props;
  return( 
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
      {/*<UserAvatar src={user.photoURL} alt={user.displayName} />*/}
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <p>message....</p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  ); 
}

export default UserMessageModal;