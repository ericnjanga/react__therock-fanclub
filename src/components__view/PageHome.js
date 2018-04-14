/**
 * Sample View
 * ---------------------
 * 
 * About component: 
 * - Renders view title and basic content (image and text)
 */

import React from 'react';

//Component ...
const PageHome = () => {
  return(
    <div>
      <h2>Home view</h2>
      <div className="view__content">
        <img src="https://sneakernews.com/wp-content/uploads/2017/07/ua-project-rock-delta-desert-sand-us-military-fall-2017-01.jpg" />
        <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
        <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
        <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
      </div>
    </div>
  );
}//[end] Home

export default PageHome;