import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {

      const [menu,setMenu] = useState("Shop")

    return (
        <div className='navbar'>
          <div className="nav-logo">
            <img src={process.env.PUBLIC_URL + '/logo1.png'} alt="Logo" className="logo"/>
             <p>CUT & NEEDLE</p>
          </div>
          <ul className="nav-menu">
            <li onClick={()=>{setMenu("shops")}}>Shop{menu==="shops"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("girls")}}>Girls{menu==="girls"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("accessories")}}>Accessories{menu==="accessories"?<hr/>:<></>}</li>
          </ul>
          <div className="nav-login-cart">
            <button>Login</button>
            <img src={process.env.PUBLIC_URL + '/cart_icon.png'} alt="" />
            <div className="nav-cart-count">0</div>
          </div>
        </div>
    )
}

export default Navbar;