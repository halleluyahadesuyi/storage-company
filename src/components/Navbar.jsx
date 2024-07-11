import logo from "../assets/imgs/logo.png";
import arrow from "../assets/imgs/arrow.png";
import styles from "../css/Navbar.module.css";
import { FaBars, FaArrowRight } from "react-icons/fa";

// export function Navbar() {
// return (
// <Navbar  >
//     <img src={logo} alt="logo" />
//     <div>
//         <li>
//             <ul>Business</ul>
//             <ul>Household</ul>
//             <ul>Containers</ul>
//             <ul>Contact us</ul>
//             <button>Call: 01917439158</button>
//         </li>
//         <button>Get a quote <img src={arrow} alt="arrow-right" /></button>
//     </div>
// </Navbar>

// );

export function Navbar({ toggleNavbar }) {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.linksButtons}>
        <ul>
          <li>
            <a href="#business">Business</a>
            <a href="#services">Household</a>
            <a href="#containers">Containers</a>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <button>Call: 01917439158</button>
        <button>
          Get a quote
          {/* <img src={arrow} alt="arrow-right" /> */}
          <FaArrowRight style={{ paddingLeft: "12px", }} />
        </button>
      </div>
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
