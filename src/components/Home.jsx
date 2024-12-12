import { useState } from "react";
import { Navbar } from "./Navbar";
import { Locations } from "./Locations";
import styles from "../css/Home.module.css";
import city from "../assets/imgs/city.png";
import { FaArrowRight } from "react-icons/fa";

// Define the Home component
export function Home() {
  // State to manage the navbar's open/closed state
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the navbar when clicking outside the tray
  const closeNavbar = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className={styles.homeContainer} onClick={closeNavbar}>
      <Navbar isNavOpen={isNavOpen} toggleNavbar={toggleNavbar} />

      {/* Main heading */}
      <h1>
        Self Storage <br />
        Newcastle & the North East
      </h1>

      {/* Button to get a quote */}
      <button className={styles.gradientButton}>
        Get a quote
        <FaArrowRight style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }} />
      </button>

      {/* City image */}
      <img src={city} alt="city" className={styles.city} />

      {/* Locations component */}
      <Locations />
    </div>
  );
}
