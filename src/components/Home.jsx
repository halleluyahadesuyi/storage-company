import { useState } from "react";
import { Navbar } from "./Navbar";
import { Locations } from "./Locations";
import styles from "../css/Home.module.css";
import city from "../assets/imgs/city.png";
import { FaArrowRight } from "react-icons/fa";

// Define the Home component as a named export
export function Home() {
  // useState hook to manage the state of whether the navbar is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar's open/closed state
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Render the component
  return (
    <>
      <div className={styles.gradientBackground}>
        {/* Render the Navbar component and pass the toggleNavbar function as a prop */}
        <Navbar toggleNavbar={toggleNavbar} />

        {/* Main heading */}
        <h1>
          Self Storage <br />
          Newcastle & the North East
        </h1>

        {/* Button to get a quote with a gradient background and an arrow icon */}
        <button className={styles.gradientButton}>
          Get a quote
          <FaArrowRight
            style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }}
          />
        </button>

        {/* City image with specific styling */}
        <img src={city} alt="city" className={styles.city} />
      </div>

      {/* Render the Locations component */}
      <Locations />
    </>
  );
}
