import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { connect } from "react-redux";

function Checkout({cart}) {
  let count = 0;
  cart.map((item) => {
    return (count += item.qty);
  });

  let totalprice = 0;
  cart.map((item) => {
    return (totalprice += item.qty * item.price);
  });
  return (
    <div className="checkout">
    {cart.map((items) => (
      <div key={items.id} className="cart_items carts__new">
        <img src={items.img} className='cart_img' alt={items.title} width="100%" /> <h2>Arrives in 3 days</h2>
      </div>
    ))}
    <div className="cart_panel cart_check">
    <p>Subtotal ({count} {count > 1 ? 'items' : 'item'})<span className='cart_panel-sp'>${totalprice}</span></p>
    <p>Delivery <span className='cart_panel-sp'>Free</span></p>
    <p>Taxes and fees <span className='cart_panel-sp'> — —</span></p>
    <div className='br'></div>
    <p>Est. total <span className='cart_panel-sp'>${totalprice}</span></p>
    </div>
    <div className="cart_panel checkout__check">
     <PayPalButton
        amount={totalprice}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "ARakhJo7qVKHuJsxCEiLfBdrWnOBSb4d1ro8a8fr3LFRDowSbkw1MvAIu8HgXnmSQNbd-8WZmYy4Siru"
        }}
      />
      <a href='https://dev.to/abodmicheal/paypal-sandbox-accounts-and-card-for-testing-3m1a' rel="noopener noreferrer"><center><h4 className='a'>Click to get paypal accounts and cards for checkout</h4></center></a>
      </div>
      </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.store.cart,
  };
}
export default connect(mapStateToProps)(Checkout);
