/**
 * Login View
 * ---------------------
 *  
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ViewLogin.css';
import { Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'; 
import faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';

//Component ...
const ViewLogin = (props) => {
  return(
    <Container className="view--login">
      <Row>
        <Col> 
          <h2>Login view</h2>
          <Button color="primary" onClick={props.onLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            Login with Google
          </Button> 
        </Col>
      </Row>
    </Container>
  );
}//[end] Login

export default ViewLogin;