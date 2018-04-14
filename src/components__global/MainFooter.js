import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = (props) => {
  return(
    <footer className="App__footer">
      <p><Link to={`/terms-and-cnditions`}>Terms &amp; Conditions</Link></p>
    </footer>
  );
}

export default MainFooter;