import React from "react";
import "./navbar.css";
import Logo from "../../assests/images/Logo.png";
const Navbar = () => {
  return (
    <body>
      <nav>
        <div class="logo">
          <img src={Logo} />
        </div>
        <ul>
          <li>
            <a href="" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Shops</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Signup</a>
          </li>
        </ul>
      </nav>
      <div className="nav-space"></div>
    </body>
  );
};

export default Navbar;
