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
    <section className="sidebar-container">
      <Link to="/Home">
        <div className="row-container">
          <FiHome size={25} />
          <span>Home</span>
        </div>
      </Link>
      <div className="row-container">
        <FiTag size={25} />
        <span>Products</span>
      </div>
      <div className="row-container">
        <div className="icon-container">
          <AiFillShop size={25} />
        </div>
        <span>Shops</span>
      </div>
      <div className="row-container">
        <VscCalendar size={25} />
        <span>Events</span>
      </div>
      <div className="row-container">
        <AiOutlineUser size={25} />
        <span>My Profile</span>
      </div>
      <div className="row-container">
        <AiOutlineShoppingCart size={25} />
        <span>My Cart</span>
      </div>
      <div className="row-container">
        <FiUpload size={25} />
        <span>My Orders</span>
      </div>
      <div className="row-container">
        <VscSettingsGear size={25} />
        <span>Settings</span>
      </div>
    </section>
  );
};

export default Sidebar;
