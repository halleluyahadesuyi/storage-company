import styles from "../css/Footer.module.css";
import footerLogo from "../assets/imgs/footerLogo.png";
import stars from "../assets/imgs/stars.png";
import truck from "../assets/imgs/truck.png";

export function Footer() {
  return (
    <> 
      <hr className={styles.faintLine} />
      <section className={styles.footer}>
        <img src={footerLogo} alt="logo" className={styles.logo} />

        <section>
          <h5>Locations</h5>
          <ul>
            <li><a href="#">Storage Brunswick</a></li>
            <li><a href="#">Storage Byker</a></li>
            <li><a href="#">Storage Durham</a></li>
            <li><a href="#">Storage Killingworth</a></li>
            <li><a href="#">Storage Morpheth</a></li>
            <li><a href="#">Storage Washington</a></li>
          </ul>
        </section>

        <section>
          <h5>About Pay Less</h5>
          <ul>
            <li><a href="#">Household Storage</a></li>
            <li><a href="#">Business Self Storage</a></li>
            <li><a href="#">Self Storage Tips & Ideas</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Containers for Sale</a></li>
            <li><a href="#">Containers for Hire</a></li>
          </ul>
        </section>

        <section>
          <h5>Contact Us</h5>
          <p>Enquiries</p>
          <ul>
            <li><a href="#">0191 743 9158</a></li>
          </ul>
          <p>Support</p>
          <ul>
            <li><a href="#">0191 743 9158</a></li>
          </ul>
        </section>

        <section>
            <h5>Reviews</h5>
          <img src={stars} alt="stars" className={styles.stars} />
          <p>
            <span>4.96</span> rating <span>167</span>reviews
          </p>
          <ul>
            <li><a href="#">See all reviews</a></li>
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
    </>
  );
}
