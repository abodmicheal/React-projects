import React from "react";
import "./products.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import Items from "./items/Items";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 400,
    });
  }
  render() {
    const products = this.state.products;
    return (
      <div className="products">
        <h3>All Products</h3>
        <div data-aos="fade-in" data-aos-delay="20" data-aos-duration="1200">
          <div className="products_home">
            {products.map((items) => {
              return (
                <Items
                  key={items.id}
                  img={items.img}
                  title={items.title}
                  price={items.price}
                  id={items.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.store.products,
  };
};

export default connect(mapStateToProps)(Products);
