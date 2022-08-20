import React from "react";
import "./Sidebar.css";
import { FiHome, FiTag, FiUpload } from "react-icons/fi";
import { VscSettingsGear, VscCalendar } from "react-icons/vsc";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillShop,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <section className="sidebar-container">
        <Link to="/Home">
          <div className="row-container">
            <FiHome size={25} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/">
          <div className="row-container">
            <FiTag size={25} />
            <span>Products</span>
          </div>
        </Link>

        <Link to="/shop">
          <div className="row-container">
            <div className="icon-container">
              <AiFillShop size={25} />
            </div>
            <span>Shops</span>
          </div>
        </Link>
        <Link to="/event">
          <div className="row-container">
            <VscCalendar size={25} />
            <span>Events</span>
          </div>
        </Link>

        <Link to="/profile">
          <div className="row-container">
            <AiOutlineUser size={25} />
            <span>My Profile</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="row-container">
            <AiOutlineShoppingCart size={25} />
            <span>My Cart</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="row-container">
            <FiUpload size={25} />
            <span>My Orders</span>
          </div>
        </Link>
        <div className="row-container">
          <VscSettingsGear size={25} />
          <span>Settings</span>
        </div>
      </section>
      <div style={{ width: "16vw" }}></div>
    </div>
  );
};

export default Sidebar;
