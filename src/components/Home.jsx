import { useState } from "react";
import { Navbar } from "./Navbar";
import styles from "../css/Home.module.css";
import city from "../assets/imgs/city.png";
import { FaArrowRight } from "react-icons/fa";
import arrow from "../assets/imgs/arrow.png";

export function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.gradientBackground}>
      <Navbar toggleNavbar={toggleNavbar} />
      <h1>
        Self Storage <br />
        Newcastle & the North East
      </h1>
      {/* <button className={styles.gradientButton}>
        Get a quote <img src={arrow} alt="arrow-right" />
      </button> */}
      <button className={styles.gradientButton}>
        Get a quote
        <FaArrowRight
          style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }}
        />
      </button>
      <img src={city} alt="city" className={styles.city} />
    </div>
  );
}
