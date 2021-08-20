import React from "react";
import Cartcount from "./cartcount";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";
import fire from '../auth/firebase'
import "./nav.css";
function Navbar({user}) {
  const onSignout = () => {
    fire.auth().signOut();
  }
  return (
    <div className="nav">
      <ul className="nav_logo">
        <li>
          <NavLink to="/">
            <h3>AbodStore</h3>
          </NavLink>
        </li>
      </ul>
      <ul className="nav_content">
        <li>Hello,   {user ? (<span><h6>{user.email}</h6><h6 className='a' onClick={onSignout}>Sign out</h6></span>) : <NavLink to="/sign-in" ><h6>Sign in</h6></NavLink>}
          </li>

        <NavLink to="/product">
          <li className="cart">
            <ShoppingBasketIcon />
            <span>
              <Cartcount />
            </span>
          </li>
        </NavLink>
      </ul>
      <div className="nav_search">
        <input placeholder="Search " />
        <div className="nav_search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
