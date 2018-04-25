import React from 'react';
import './UserMessage.css';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'; 
import DBUser from '../../utilities/DBUser.class.js';  

/**
 * - Renders info passed in props
 * - Fetch user info as soon as component mounts to generate avatar
 */  
class UserMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : null
    }
  }

  componentDidMount() {
    DBUser.get(this.props.data.uid).then((user) => {
      this.setState({
        user
      });
    });
  }

  render() {
    const { data } = this.props; 
    const { user } = this.state; 
    return( 
      <Card className="UserMessage"> 
        <CardBody>
          { user && <img className="user-avatar" src={user.photoURL} alt={user.name} /> }
          <CardTitle>{data.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{data.content}</CardText> 
        </CardBody>
      </Card> 
    );
  }
}

export default UserMessage;