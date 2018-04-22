/**
 * Sample View
 * ---------------------
 *  
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ViewHome.css';

//Component ...
const ViewHome = () => {
  return(
    <Container>
      <Row>
        <Col>
          <h2>Home view</h2>
          <div className="view__content">
            <img className="img-fluid" src="https://sneakernews.com/wp-content/uploads/2017/07/ua-project-rock-delta-desert-sand-us-military-fall-2017-01.jpg" alt="About" />
            <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
            <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
            <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
            <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
            <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
            <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}//[end] Home

export default ViewHome;