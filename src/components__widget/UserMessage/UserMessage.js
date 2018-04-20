import React from 'react';
import './UserMessage.css';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'; 

  
const UserMessage = (props) => {
  const { data } = props; 

  return( 
    <Card className="UserMessage"> 
      <CardBody>
        <img className="user-avatar" src={data.userData.photoURL} alt="Eric Njanga" />
        <CardTitle>{data.title}</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>{data.content}</CardText> 
      </CardBody>
    </Card> 
  );
}

export default UserMessage;