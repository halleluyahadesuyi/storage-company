import { useState } from "react";
import logo from "../assets/imgs/logo.png";
import styles from "../css/Navbar.module.css";
import { FaBars, FaArrowRight } from "react-icons/fa";

// Define the Navbar component
export function Navbar({ isNavOpen, toggleNavbar }) {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <img src={logo} alt="logo" className={styles.logo} />

      {/* Hamburger Icon */}
      <a className={styles.icon} onClick={toggleNavbar}>
        <FaBars />
      </a>

      {/* Navigation Links and Buttons */}
      <div className={`${styles.linksButtons} ${isNavOpen ? styles.open : ""}`}>
        <ul>
          <li><a href="#business">Business</a></li>
          <li><a href="#services">Household</a></li>
          <li><a href="#containers">Containers</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Call Button */}
        <button>Call: 01917439158</button>

        {/* Get a Quote Button */}
        <button className={styles.quoteButton}>
          Get a quote
          <FaArrowRight style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }} />
        </button>
      </div>
    </nav>
  );
}
