/**
 * Sample View
 * ---------------------
 *  
 */

import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import './ViewProfile.css';

//Component ...
const ViewProfile = () => {
  return(
    <Container>
      <Row>
        <Col>
          <h2>Profile</h2>
          <div className="view__content">
            <img className="img-fluid" src="https://i.pinimg.com/originals/f9/36/2e/f9362ed24caa19f82b118b0eccb3fcf3.jpg" alt="About" />
            <p>Gummi bears jelly beans chocolate cake marzipan muffin. Halvah cupcake fruitcake apple pie ice cream gingerbread chupa chups sweet. Tiramisu liquorice cheesecake tiramisu.</p>
            <p>Bear claw liquorice ice cream sugar plum cheesecake cotton candy pastry topping. Carrot cake fruitcake lollipop apple pie cheesecake. Jelly-o lemon drops brownie caramels. Candy canes cookie soufflé cookie cake tiramisu.</p>
            <p>Cupcake bear claw chupa chups caramels. Jelly beans soufflé cake cake lollipop chocolate cake chocolate cake tootsie roll. Gummi bears muffin macaroon halvah sesame snaps.</p>
            <p>Lollipop cupcake apple pie cookie sesame snaps pastry toffee cheesecake cotton candy. Dessert carrot cake caramels biscuit marzipan jelly beans ice cream icing cheesecake. Oat cake gingerbread topping apple pie.</p>
            <p>Candy canes carrot cake muffin carrot cake fruitcake pie sesame snaps. Sweet roll lemon drops tart tart pie marshmallow soufflé sweet gingerbread. Donut macaroon cupcake candy canes toffee chocolate cake.</p>
            <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
            <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
            <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}//[end] Profile

export default ViewProfile;