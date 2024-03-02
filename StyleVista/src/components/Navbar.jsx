import React from "react";
import {
  Home,
  Search,
  MessageSquare,
  Users,
  Bell,
  Settings,
} from "react-feather";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={{ listStyle: "none" }} className="navbar__menu">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Home />
            <span>Home</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Search />
            <span>Search</span>
          </a>
        </li>

        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <MessageSquare />
            <span>Messages</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Users />
            <span>Customers</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Bell />
            <span>Notifications</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Settings />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
