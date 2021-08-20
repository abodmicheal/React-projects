import React from "react";
import "./items.css";
import { AddToCart } from "../../../store/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function items({ id, img, title, price, AddToCart }) {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={img} alt={title} width="100%" />
        <div className="item_details">
          <h3>{title}</h3>
          <h3>${price}</h3>
        </div>
      </Link>
      <div className="item_details">
        <button className="item_button" onClick={() => AddToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (id) => dispatch(AddToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(items);
