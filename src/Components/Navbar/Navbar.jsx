import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    // the default value is kinder shop.
  const [menu, setMenu] = useState("shop");
  return (
    // navigation bar
    <div class="navbar">
      {/* logo */}
      <div className="nav-logo">
        <img src={Logo} alt="Logo of the web app." />
        {/* name of the website */}
        <p>SHOPPER</p>
      </div>
      {/* unordered list of links for navigation bar */}
      {/* we can use useState in alot of clever ways */}
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}>
          <Link to='/'>Shop</Link> {menu === "shop" ? <hr />:<></>}
        </li>

        <li onClick={() => {setMenu("men")}}><Link to='/mens'>Men</Link> 
        {menu === 'men' ? <hr />:<></>}</li>

        <li onClick={() => {setMenu("women")}}><Link to='/womens'>Women</Link>
        {menu === 'women' ? <hr />:<></>}</li>

        <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link>
        {menu === 'kids' ? <hr />:<></>}</li>
      </ul>
      {/* login button */}
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
        {/* counter whenever we click on the login button */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
