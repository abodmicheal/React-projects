import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Navbar from "./Navbar";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner__content">
          <h2>Go Near </h2>
          <h5>
            Settle in somewhere new. Discover new places to live, work, have fun
            or relax.
          </h5>
          <Link to="/result">
            <button>Explore NearBy</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Banner;
