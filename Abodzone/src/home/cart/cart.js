import React from "react";
import Topitems from "../products/Topitems/topitems";
import { AdjustQuantity, RemoveFromCart } from "../../store/store";
import "./cart.css";
import Modalbox from "./Modalbox";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Cart({ cart, AdjustQuantity, RemoveFromCart, user }) {

  let count = 0;
  cart.map((item) => {
    return (count += item.qty);
  });
 let totalprice = 0;
 cart.map((item) => {
   return (totalprice += item.qty * item.price);
 });
  function adj(e) {
    var color;
    var capacity;
    cart.map((items) => {
      color = items.color.length > 3 ? items.color : items.color[0];
      capacity = items.capacity.length > 3 ? items.capacity : items.capacity[0];
      return [color][capacity];
    });
    AdjustQuantity(parseInt(e.target.id, 10), e.target.value, color, capacity);
  }
  console.log(user);
  return (
    <div className="carts">
      <div className="space"></div>
      <h2 className="carts_title">
        {count} {count > 1 ? <span>items</span> : <span>item</span>} in Your
        Cart
      </h2>
      <div className="carts_mobile-1">
         {count > 0 && <center><p>Est. total <b>${totalprice}</b></p>
         <Modalbox count={count} user={user}/>
        </center>}
      </div>

      {count === 0 && (
        <p className="carts_title"> Go ahead and add something! </p>
      )}
      {count === 0 && <h1 className="carts_c">Your Cart is Empty</h1>}
      {cart.map((items) => (
        <div key={items.id} className="cart_items">
          <img src={items.img} className='cart_img' alt={items.title} />
          <div className="items_details">
            <div className="items_title">
            <Link to={`/product/${items.id}`}>
              {items.title}{" "}
              </Link>
              <span>
                {items.capacity === undefined || items.capacity.length > 3  ? (
                  <span>{items.capacity}</span>
                ) : (
                  <span>{items.capacity[0]}</span>
                )}
              </span>{" "}
              <span>
                {items.color.length > 3 ? (
                  <span>{items.color}</span>
                ) : (
                  <span>{items.color[0]}</span>
                )}
              </span>
              <br />
            </div>
            <div>
              Actual color:{" "}
              {items.color.length > 3 ? (
                <span>{items.color}</span>
              ) : (
                <span>{items.color[0]}</span>
              )}
            </div>
            <div className="carts_price">
              <h4> ${items.price}</h4>
              <h6>3-day delivery</h6>
              <button  className='carts_btn' onClick={() => RemoveFromCart(items.id)}>Remove</button>
            </div>
            <div className="carts_qtys">
              <form onChange={adj}>
                <p>Qty: </p>
                <select className="carts_qty" id={items.id}>
                  <option defaultValue={items.qty === 1} values={1}>
                    1
                  </option>
                  <option values={2} defaultValue={items.qty === 2}>
                    2
                  </option>
                  <option values={3} defaultValue={items.qty === 3}>
                    3
                  </option>
                  <option values={4} defaultValue={items.qty === 4}>
                    4
                  </option>
                  <option values={5} defaultValue={items.qty === 5}>
                    5
                  </option>
                  <option values={6} defaultValue={items.qty === 6}>
                    6
                  </option>
                  <option values={7} defaultValue={items.qty === 7}>
                    7
                  </option>
                  <option values={8} defaultValue={items.qty === 8}>
                    8
                  </option>
                  <option values={9} defaultValue={items.qty === 9}>
                    9
                  </option>
                  <option values={10} defaultValue={items.qty === 10}>
                    10
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>
      ))}
      {count > 0 && (
        <div className='cart_panel'>
        <p>Subtotal ({count} {count > 1 ? 'items' : 'item'})<span className='cart_panel-sp'>${totalprice}</span></p>
        <p>Delivery <span className='cart_panel-sp'>Free</span></p>
        <p>Taxes and fees <span className='cart_panel-sp'> — —</span></p>
        <div className='br'></div>
        <p>Est. total <span className='cart_panel-sp'>${totalprice}</span></p>
        <Modalbox count={count} user={user}/>
        <p>Congrats — you get free delivery!</p>
        </div>
      )}

      <h4 className="carts_t">
        Items are subject to change in price and availability. The Cart is a
        temporary storage location for a list of your things, and it represents
        the most recent price for each item.
      </h4>
      <Topitems />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.store.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AdjustQuantity: (id, qty, color, capacity) =>
      dispatch(AdjustQuantity(id, qty, color, capacity)),
      RemoveFromCart: (id) => dispatch(RemoveFromCart(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
