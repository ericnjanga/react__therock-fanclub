import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Import view components 
import ViewAbout from './ViewAbout.js';
import ViewArticles from './ViewArticles.js';
import ViewGallery from './ViewGallery.js';
import ViewHome from './ViewHome.js';
import ViewLogin from './ViewLogin.js';
import ViewTermsAndConditions from './ViewTermsAndConditions.js';

const ViewAll = (props) => {
  const { user, onLogin } = props;
  return(
    <section>  
      {/* Read README.md file for route rules (Setting up routes and shell login/logout system) */} 
      <Route exact path="/login" render={() => (
        !user && <ViewLogin onLogin={onLogin} />
      )}/>  
      {/* Render [login view] only if user is logged out */}
      <Route exact path="/" render={() => (
        !user ? (
          <div className="l1"><Redirect to="/login"/></div>
        ) : (
          <Route path="/" exact={true} component={ViewHome} />
        )
      )}/>

      {/* Don't Render [login view] if user is logged in */
        user && <Route exact path="/login" render={() => (
          <Redirect to="/"/>
        )}/>
      }

      {/* Render views (if logged in) / [login view] (if logged out) */}
      {/* --- [about view] --- */}
      <Route exact path="/about" render={() => (
        !user ? (
          <Redirect to="/login"/>
        ) : (
          <Route path="/about" exact={true} component={ViewAbout} />
        )
      )}/>

      {/* --- [articles view] --- */}
      <Route exact path="/articles" render={() => (
        !user ? (
          <Redirect to="/login"/>
        ) : (
          <Route path="/articles" exact={true} component={ViewArticles} />
        )
      )}/>

      {/* --- [gallery view] --- */}
      <Route exact path="/gallery" render={() => (
        !user ? (
          <Redirect to="/login"/>
        ) : (
          <Route path="/gallery" exact={true} component={ViewGallery} />
        )
      )}/>
      {/* Render views (if logged in) / [login view] (if logged out) */}


      {/* Render [terms & conditions view] at anytime */}
      <Route path="/terms-and-cnditions" exact={true} component={ViewTermsAndConditions} />
    </section> 
  );
};

export default ViewAll;