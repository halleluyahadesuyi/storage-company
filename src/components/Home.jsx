import { useState } from "react";
import { Navbar } from "./Navbar";
import styles from "../css/Home.module.css";
import city from "../assets/imgs/city.png";
import arrow from "../assets/imgs/arrow.png";

export function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.gradientBackground}>
      <Navbar toggleNavbar={toggleNavbar} />
      <h1>Self Storage Newcastle & the North East</h1>
      <img src={city} alt="city" className={styles.city} />
      <button className={styles.gradientButton}>
        Get a quote <img src={arrow} alt="arrow-right" />
      </button>
    </div>
  );
}
