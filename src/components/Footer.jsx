import styles from "../css/Footer.module.css";
import logo from "../assets/imgs/logo.png";
import stars from "../assets/imgs/stars.png";
import truck from "../assets/imgs/truck.png";

export function Footer() {
  return (
    <Footer>
      <section className={styles.footer}>
        <img src={logo} alt="logo" className={styles.logo} />

        <section className={styles.locations}>
          <h5>Locations</h5>
          <ul>
            <li>Storage Brunswick</li>
            <li>Storage Byker</li>
            <li>Storage Durham</li>
            <li>Storage Killingworth</li>
            <li>Storage Morpheth</li>
            <li>Storage Washington</li>
          </ul>
        </section>

        <section className={styles.about}>
          <h5>About Pay Less</h5>
          <ul>
            <li>Household Storage</li>
            <li>Business Self Storage</li>
            <li>Self Storage Tips & Ideas</li>
            <li>FAQs</li>
            <li>Containers for Sale</li>
            <li>Containers for Hire</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h5>Contact Us</h5>
          <p>Enquiries</p>
          <ul>
            <li>0191 743 9158</li>
          </ul>
          <p>Support</p>
          <ul>
            <li>0191 743 9158</li>
          </ul>
        </section>

        <section className={styles.reviews}>
          <img src={stars} alt="stars" />
          <p>
            <span>4.96</span> rating <span>167</span>reviews
          </p>
          <ul>
            <li>See all reviews</li>
          </ul>
        </section>

        <img src={truck} alt="truck" className={styles.truck} />
      </section>

      <section className={styles.end}>
        <p>
          Pay Less for Storage, 18 Arrow Close, Killingworth, Newcastle Upon
          Tyne, NE12 6QN
        </p>
        <p>Registered Company (0451 5857)</p>
      </section>
    </Footer>
  );
}
