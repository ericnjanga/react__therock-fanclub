import React from 'react';
import './UserMessage.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserMessage = (props) => {
  return(

    <Card className="UserMessage"> 
      <CardBody>
        <img className="user-avatar" src="https://lh5.googleusercontent.com/-COiFmnKgWAY/AAAAAAAAAAI/AAAAAAAABTk/gGWhai835yE/photo.jpg" alt="Eric Njanga" />
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> 
      </CardBody>
    </Card> 
  );
}

export default UserMessage;