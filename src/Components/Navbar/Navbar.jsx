import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

      const [menu,setMenu] = useState("home")

    return (
        <div className='navbar'>
          <div className="nav-logo">
            <img src={process.env.PUBLIC_URL + '/logo1.png'} alt="Logo" className="logo"/>
             <p>CUT & NEEDLE</p>
          </div>
          <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("girls")}}><Link style={{ textDecoration: 'none' }} to='/girls'>Girls</Link>{menu==="girls"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
          </ul>
          <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link>
           <Link to='/cart'><img src={process.env.PUBLIC_URL + '/cart_icon.png'} alt="" /></Link>
            <div className="nav-cart-count">0</div>
          </div>
        </div>
    )
}

export default Navbar;