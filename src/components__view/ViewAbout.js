/**
 * Sample View
 * ---------------------
 * 
 * About component: 
 * - Renders view title and basic content (image and text)
 */

import React from 'react';

//Component ...
const ViewAbout = () => {
  return(
    <div>
      <h2>About view</h2>
      <div className="view__content">
        <img src="http://aaronhertzog.com/wp-content/uploads/2017/10/rock.jpeg" alt="About" />
        <p>Gummi bears jelly beans chocolate cake marzipan muffin. Halvah cupcake fruitcake apple pie ice cream gingerbread chupa chups sweet. Tiramisu liquorice cheesecake tiramisu.</p>
        <p>Bear claw liquorice ice cream sugar plum cheesecake cotton candy pastry topping. Carrot cake fruitcake lollipop apple pie cheesecake. Jelly-o lemon drops brownie caramels. Candy canes cookie soufflé cookie cake tiramisu.</p>
        <p>Cupcake bear claw chupa chups caramels. Jelly beans soufflé cake cake lollipop chocolate cake chocolate cake tootsie roll. Gummi bears muffin macaroon halvah sesame snaps.</p>
      </div>
    </div>
  );
}//[end] About

export default ViewAbout;