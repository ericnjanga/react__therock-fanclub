import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      user: {id:'user1', name:'Nkounda Njanga', email:'nknj@gmail.com'}
    });
  }

  logout() {
    this.setState({
      user: null
    });
  }
  
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App__header"> 
            <h1 className="App-title">Rock App</h1>
            {
              user ? (
                <nav className="App__nav">
                  <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/articles`}>Articles</Link></li>
                    <li><Link to={`/gallery`}>Gallery</Link></li>
                  </ul>
                  <button className="App__btnLogout" onClick={this.logout}>Logout</button>
                </nav>
              ) : (
                <nav className="App__nav">
                  <ul> 
                    <li><Link to={`/login`}>Login</Link></li> 
                  </ul> 
                </nav>
              )
            } 
          </header>
          <section className="App__content"> 
            <Route exact path="/login" render={() => (
              !user && <PageLogin onLogin={this.login} />
            )}/>
            
            <section> 
              <Route exact path="/" render={() => (
                !user ? (
                  <div className="l1"><Redirect to="/login"/></div>
                ) : (
                  <Route path="/" exact={true} component={PageHome} />
                )
              )}/>

              {
                user && <Route exact path="/login" render={() => (
                  <Redirect to="/"/>
                )}/>
              }

              
              <Route exact path="/about" render={() => (
                !user ? (
                  <Redirect to="/login"/>
                ) : (
                  <Route path="/about" exact={true} component={PageAbout} />
                )
              )}/>
              <Route exact path="/articles" render={() => (
                !user ? (
                  <Redirect to="/login"/>
                ) : (
                  <Route path="/articles" exact={true} component={PageArticles} />
                )
              )}/>
              <Route exact path="/gallery" render={() => (
                !user ? (
                  <Redirect to="/login"/>
                ) : (
                  <Route path="/gallery" exact={true} component={PageGallery} />
                )
              )}/>


              {/* Views that can be access at anytime */}
              <Route path="/terms-and-cnditions" exact={true} component={PageTermsAndConditions} />

             
               

               



              {/*<Route path="/" exact={true} component={PageHome} />
              <Route path="/about" exact={true} component={PageAbout} />
              <Route path="/articles" exact={true} component={PageArticles} />
<Route path="/gallery" exact={true} component={PageGallery} />*/}


              {/*<PageHome />
              <PageAbout />
              <PageArticles />
              <PageGallery />
              <PageTermsAndConditions />*/}
            </section>
          </section>
          <footer className="App__footer">
            <p><Link to={`/terms-and-cnditions`}>Terms &amp; Conditions</Link></p>
          </footer>
        </div>
      </Router>
    );
  }
}


//Login ...
const PageLogin = (props) => {
  return(
    <div className="view--login">
      <h2>Login view</h2>
      <button onClick={props.onLogin}>Login with Google</button>
    </div>
  );
}//[end] Login


//Home ...
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


//About ...
const PageAbout = () => {
  return(
    <div>
      <h2>About view</h2>
      <div className="view__content">
        <img src="http://aaronhertzog.com/wp-content/uploads/2017/10/rock.jpeg" />
        <p>Gummi bears jelly beans chocolate cake marzipan muffin. Halvah cupcake fruitcake apple pie ice cream gingerbread chupa chups sweet. Tiramisu liquorice cheesecake tiramisu.</p>
        <p>Bear claw liquorice ice cream sugar plum cheesecake cotton candy pastry topping. Carrot cake fruitcake lollipop apple pie cheesecake. Jelly-o lemon drops brownie caramels. Candy canes cookie soufflé cookie cake tiramisu.</p>
        <p>Cupcake bear claw chupa chups caramels. Jelly beans soufflé cake cake lollipop chocolate cake chocolate cake tootsie roll. Gummi bears muffin macaroon halvah sesame snaps.</p>
      </div>
    </div>
  );
}//[end] About


//Articles ...
const PageArticles = () => {
  return(
    <div>
      <h2>Articles view</h2>
      <div className="view__content">
        <img src="https://media.gettyimages.com/photos/dwayne-johnson-aka-the-rock-poses-for-a-portrait-at-the-2017-peoples-picture-id632633646?s=612x612" />
        <p>Lollipop cupcake apple pie cookie sesame snaps pastry toffee cheesecake cotton candy. Dessert carrot cake caramels biscuit marzipan jelly beans ice cream icing cheesecake. Oat cake gingerbread topping apple pie.</p>
        <p>Candy canes carrot cake muffin carrot cake fruitcake pie sesame snaps. Sweet roll lemon drops tart tart pie marshmallow soufflé sweet gingerbread. Donut macaroon cupcake candy canes toffee chocolate cake.</p>
        <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
        <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
        <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
      </div>
    </div>
  );
}//[end] Articles


//Gallery ...
const PageGallery = () => {
  return(
    <div>
      <h2>Gallery view</h2>
      <div className="view__content">
        <img src="https://i.pinimg.com/originals/f9/36/2e/f9362ed24caa19f82b118b0eccb3fcf3.jpg" />
        <p>Gummi bears jelly beans chocolate cake marzipan muffin. Halvah cupcake fruitcake apple pie ice cream gingerbread chupa chups sweet. Tiramisu liquorice cheesecake tiramisu.</p>
        <p>Bear claw liquorice ice cream sugar plum cheesecake cotton candy pastry topping. Carrot cake fruitcake lollipop apple pie cheesecake. Jelly-o lemon drops brownie caramels. Candy canes cookie soufflé cookie cake tiramisu.</p>
        <p>Cupcake bear claw chupa chups caramels. Jelly beans soufflé cake cake lollipop chocolate cake chocolate cake tootsie roll. Gummi bears muffin macaroon halvah sesame snaps.</p>
        <p>Lollipop cupcake apple pie cookie sesame snaps pastry toffee cheesecake cotton candy. Dessert carrot cake caramels biscuit marzipan jelly beans ice cream icing cheesecake. Oat cake gingerbread topping apple pie.</p>
        <p>Candy canes carrot cake muffin carrot cake fruitcake pie sesame snaps. Sweet roll lemon drops tart tart pie marshmallow soufflé sweet gingerbread. Donut macaroon cupcake candy canes toffee chocolate cake.</p>
        <p>Biscuit pudding cupcake toffee dessert pastry. Muffin marshmallow chocolate bar. Dragée apple pie halvah pastry dessert jelly beans. Apple pie apple pie pie halvah cupcake marshmallow.</p>
        <p>Icing cake candy sugar plum pastry biscuit cake icing carrot cake. Croissant icing sesame snaps croissant candy marshmallow ice cream. Tiramisu cake toffee cheesecake jelly jelly-o sesame snaps pastry pie.</p>
        <p>Chupa chups bear claw tiramisu. Topping sweet topping muffin cupcake fruitcake danish. Caramels dessert toffee pudding marzipan. Pie danish tart cake.</p>
      </div>
    </div>
  );
}//[end] Gallery


//TermsAndConditions ...
const PageTermsAndConditions = () => {
  return(
    <div>
      <h2>TermsAndConditions view</h2>
      <div className="view__content">
        <p>Jelly candy chocolate cake danish tart marshmallow gummies cotton candy bonbon. Gummies jelly-o dragée candy canes chupa chups wafer jujubes cake. Chocolate wafer icing chocolate cake.Jelly apple pie jelly jujubes pie candy chupa chups bonbon. Fruitcake ice cream gummi bears. Brownie chupa chups wafer sweet sweet roll. Sweet muffin lollipop candy canes bear claw cheesecake.</p>
        <p>Sugar plum icing icing jelly gingerbread marzipan powder candy. Bear claw pudding biscuit croissant biscuit bonbon pie. Chocolate bar cookie cake. Cookie cupcake apple pie pudding carrot cake.Croissant fruitcake toffee sweet roll tart tootsie roll. Topping cake bear claw dessert sweet roll jelly beans chocolate. Marshmallow pudding jujubes jelly beans pie chocolate bar cupcake macaroon.</p>
        <p>Tootsie roll jelly-o cheesecake chocolate bar gummies jelly. Icing oat cake caramels. Toffee cupcake gummies muffin gummies.Lollipop gingerbread sweet cupcake pastry sesame snaps soufflé tart cake. Tootsie roll candy wafer biscuit sweet roll marshmallow bonbon powder. Sesame snaps tiramisu cupcake cake cookie.</p>

        <p>Cookie lemon drops cheesecake toffee pastry bear claw bear claw. Sweet roll chocolate cupcake toffee. Jujubes soufflé topping chupa chups.Croissant candy canes cookie bonbon cake. Dragée wafer marzipan fruitcake dragée. Marshmallow chocolate cake candy canes brownie.</p>

        <p>Chocolate bar bear claw fruitcake biscuit cupcake. Dragée sugar plum dessert dessert pastry. Toffee candy sugar plum bonbon. Icing lemon drops jelly-o gummi bears chocolate bar.Halvah danish cupcake muffin tart sweet roll cotton candy muffin. Carrot cake candy canes chocolate cake soufflé donut icing soufflé. Gingerbread chocolate cake oat cake. Tart gummies dragée marzipan carrot cake muffin pudding tart dragée.</p>

        <p>Tart jelly beans liquorice dragée dessert brownie chocolate cake. Pie candy canes chocolate tiramisu. Soufflé toffee dessert carrot cake. Soufflé chupa chups pie.Sweet roll marshmallow muffin lollipop. Carrot cake jujubes sweet. Tiramisu cheesecake icing bonbon bonbon cotton candy tootsie roll. Toffee pie powder.</p>

        <p>Donut pastry ice cream tart tart. Wafer tart cookie sesame snaps chupa chups candy muffin. Toffee toffee chocolate cake pudding toffee. Bonbon carrot cake soufflé candy caramels halvah candy gummi bears.Jelly beans cotton candy croissant lollipop gummies. Pie carrot cake tart muffin chocolate sesame snaps pie cake. Sweet bonbon macaroon jujubes brownie candy canes.</p>

        <p>Oat cake halvah jujubes topping sesame snaps tootsie roll icing. Sweet cupcake sweet donut cotton candy candy canes candy canes cupcake. Pastry bonbon cheesecake jelly beans dragée cheesecake lollipop.Apple pie wafer sugar plum brownie bonbon jujubes danish cupcake. Jelly beans apple pie cake chupa chups carrot cake brownie sesame snaps brownie. Cupcake chocolate cake marshmallow. Marshmallow sugar plum toffee sesame snaps croissant lollipop cotton candy gingerbread.</p>

        <p>Bonbon bonbon cake jelly beans sweet roll. Dragée gummies danish lollipop. Tiramisu cake sweet roll tart cupcake pastry danish.Toffee caramels candy canes jujubes caramels. Cake caramels marzipan. Pie macaroon pastry macaroon oat cake liquorice jelly cupcake.</p>

        <p>Jujubes caramels wafer wafer cotton candy muffin liquorice. Cheesecake gingerbread icing gummi bears cake toffee. Sweet dessert brownie liquorice topping apple pie apple pie fruitcake.Gummi bears halvah pudding soufflé muffin apple pie caramels cookie. Powder muffin jujubes fruitcake biscuit jelly beans muffin. Pudding gummi bears cotton candy toffee.</p>

        <p>Cotton candy chocolate tootsie roll oat cake icing marshmallow oat cake tootsie roll chupa chups. Sesame snaps jelly beans chocolate cake carrot cake liquorice ice cream. Ice cream chocolate cake jelly chupa chups fruitcake candy. Soufflé cake biscuit chocolate bar cheesecake croissant.Brownie pastry macaroon topping donut. Gingerbread apple pie macaroon. Pie powder oat cake wafer cupcake. Gummi bears marshmallow halvah.</p>

        <p>Danish jelly beans bonbon. Dessert gummi bears cake muffin pie. Marshmallow candy canes gummi bears macaroon liquorice ice cream. Ice cream cookie muffin jelly pudding sesame snaps dragée candy.Bonbon donut tiramisu sweet apple pie candy chocolate. Muffin cheesecake caramels. Soufflé danish fruitcake cotton candy gummies donut caramels. Jujubes jelly beans donut bonbon ice cream wafer powder chocolate bar.</p>

        <p>Chocolate cake jujubes marzipan carrot cake cotton candy brownie chupa chups. Jelly-o macaroon toffee brownie ice cream. Muffin tiramisu pastry. Sweet roll lollipop donut dessert soufflé dessert jujubes cookie lollipop.Cheesecake jelly bear claw. Jujubes chocolate bar bonbon ice cream cupcake halvah cookie powder. Sesame snaps powder cheesecake soufflé bear claw gummi bears bonbon. Sesame snaps cheesecake sweet roll chocolate bar.</p>

        <p>Sesame snaps sugar plum cupcake wafer. Tootsie roll bear claw brownie bear claw candy canes. Sweet roll chocolate bar jelly beans. Topping bear claw topping dessert chupa chups lemon drops sweet muffin danish.Pie tart soufflé powder chupa chups tiramisu biscuit bonbon. Tart jelly marshmallow soufflé chupa chups. Bonbon candy fruitcake.</p>

        <p>Macaroon liquorice chocolate cake tart cake candy jujubes dessert chocolate bar. Pastry jelly beans muffin. Icing brownie macaroon wafer bear claw. Candy donut cupcake pastry marshmallow.Gingerbread apple pie marshmallow cookie jujubes fruitcake dragée icing. Lemon drops bear claw fruitcake dragée carrot cake bonbon sweet roll sesame snaps toffee. Pie apple pie sesame snaps caramels bonbon. Cake bonbon candy pastry.</p>
      </div>
    </div>
  );
}//[end] TermsAndConditions




export default App;
