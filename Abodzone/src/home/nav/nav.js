import React from "react";
import Navbar from "./Navbar";
import "./nav.css";
class Nav extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       nav: false,
       setcount: 0,
     };

}
  listener = null;
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.pageYOffset > 70) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    return (
      <div>
        <div className={`Nav ${this.state.nav && "Nav__black"}`}>
          <Navbar user={this.props.user}/>
        </div>
      </div>
    );
  }
}

export default Nav;
