import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
          <div className="nav-logo">
            <img src={process.env.PUBLIC_URL + '/logo1.png'} alt="Logo" className="logo"/>
             <p>SHOPPER</p>
          </div>
          <ul className="nav-menu">
            <li>Shop</li>
            <li>Women</li>
            <li>Girls</li>
            <li>Accessories</li>
          </ul>
          <div className="nav-login-cart">
            <button>Login</button>
            <img src={process.env.PUBLIC_URL + '/cart_icon.png'} alt="" />
          </div>
        </div>
    )
}

export default Navbar;