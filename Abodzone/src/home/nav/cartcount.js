import React from "react";
import { connect } from "react-redux";
function Cartcount({ cart }) {
  let count = 0;
  cart.forEach((items) => {
    count += items.qty;
  });
  return <span>{count}</span>;
}
const mapStateToProps = (state) => {
  return {
    cart: state.store.cart,
  };
};
export default connect(mapStateToProps)(Cartcount);
