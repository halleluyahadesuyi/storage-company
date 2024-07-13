import logo from "../assets/imgs/logo.png";
import styles from "../css/Navbar.module.css";
import { FaBars, FaArrowRight } from "react-icons/fa";

// Define the Navbar component as a named export
// The component receives toggleNavbar as a prop to handle the click event for toggling the navbar
export function Navbar({ toggleNavbar }) {
  // Render the component
  return (
    <nav className={styles.navbar}>
      {/* Logo image with styling */}
      <img src={logo} alt="logo" className={styles.logo} />

      {/* Container for navigation links and buttons */}
      <div className={styles.linksButtons}>
        {/* Navigation links wrapped in an unordered list */}
        <ul>
          <li>
            <a href="#business">Business</a>
            <a href="#services">Household</a>
            <a href="#containers">Containers</a>
            <a href="#contact">Contact us</a>
          </li>
        </ul>

        {/* Call button */}
        <button>Call: 01917439158</button>

        {/* Get a quote button with an arrow icon */}
        <button>
          Get a quote
          <FaArrowRight
            style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }}
          />
        </button>
      </div>

      {/* Icon to toggle the navbar in mobile view */}
      <a
        href="javascript:void(0);"
        className={styles.icon}
        onClick={toggleNavbar}
      >
        <FaBars />
      </a>
    </nav>
  );
}
