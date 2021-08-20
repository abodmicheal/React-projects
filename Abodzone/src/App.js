import React from "react";
import "./App.css";
import Cart from "./home/cart/cart";
import SignIn from "./home/auth/signIn";
import SignUp from "./home/auth/signUp";
import Checkout from "./home/cart/checkout/checkout";
import Nav from "./home/nav/nav";
import Home from "./home/Home";
import Singleitems from "./home/products/Singleitems/Singleitems";
import Footer from "./home/footer/Footer";
import fire from './home/auth/firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  state= {
  user : {},
  }
authListener = () => {
   fire.auth().onAuthStateChanged((user) => {
 if (user) {
   this.setState({user})
 } else {
   this.setState({user: null})
 }
});
  }
  componentDidMount(){
    this.authListener();
  }
  render(){
  return (
    <div className="App">
      <Router>
        <Nav user={this.state.user}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" >
          <Cart user={this.state.user} />
          </Route>
          <Route exact path="/product/:id" component={Singleitems} />
          <Route exact path="/checkout/" component={Checkout} />
          {this.state.user ? <Home /> : <Route exact path="/sign-in/" component={SignIn} />}
          {this.state.user ? <Home /> : <Route exact path="/sign-up/" component={SignUp} />}
        </Switch>
        <Footer />
      </Router>
    </div>
  );}
}

export default App;
