import React from "react";
import "./banner.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const slideImages = ["macbook.jpg", "iphone.jpg", "watch.jpg"];

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <center>
          <Slide easing="ease">
            <div className="each-slide">
              <img src={slideImages[0]} alt="macbook" />
            </div>
            <div className="each-slide">
              <img src={slideImages[1]} alt="apple-watch" />
            </div>
            <div className="each-slide">
              <img src={slideImages[2]} alt="iphone" />
            </div>
          </Slide>
        </center>
        </div>
    );
  }
}

export default Banner;
