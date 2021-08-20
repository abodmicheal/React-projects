import React from "react";
import Banner from "./banner/banner";
import Products from "./products/products";
import Service from "./service/service";
function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <Products />
    </div>
  );
}

export default Home;
