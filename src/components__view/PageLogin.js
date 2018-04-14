/**
 * Login View
 * ---------------------
 * 
 * About component: 
 * - Renders login panel
 * - cCalls a props function on click
 */

import React from 'react';

//Component ...
const PageLogin = (props) => {
  return(
    <div className="view--login">
      <h2>Login view</h2>
      <button onClick={props.onLogin}>Login with Google</button>
    </div>
  );
}//[end] Login

export default PageLogin;