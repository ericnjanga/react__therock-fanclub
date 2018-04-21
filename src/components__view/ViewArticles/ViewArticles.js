/**
 * Sample View
 * ---------------------
 * 
 * About component: 
 * - Renders view title and basic content (image and text)
 */

import React from 'react';
import './ViewArticles.css';

//Component ...
const ViewArticles = () => {
  return(
    <div>
      <h2>Articles view</h2>
      <div className="view__content">
        <img src="https://media.gettyimages.com/photos/dwayne-johnson-aka-the-rock-poses-for-a-portrait-at-the-2017-peoples-picture-id632633646?s=612x612" alt="About" />
        <p>Lollipop cupcake apple pie cookie sesame snaps pastry toffee cheesecake cotton candy. Dessert carrot cake caramels biscuit marzipan jelly beans ice cream icing cheesecake. Oat cake gingerbread topping apple pie.</p>
        <p>Candy canes carrot cake muffin carrot cake fruitcake pie sesame snaps. Sweet roll lemon drops tart tart pie marshmallow soufflé sweet gingerbread. Donut macaroon cupcake candy canes toffee chocolate cake.</p>
        <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
        <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
        <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
      </div>
    </div>
  );
}//[end] Articles

export default ViewArticles;