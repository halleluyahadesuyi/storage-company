import { FaArrowRight } from "react-icons/fa";
import safe from "../assets/imgs/safe.png";
import easy from "../assets/imgs/easy.png";
import affordable from "../assets/imgs/affordable.png";
import checkmark from "../assets/imgs/checkmark.png";
import plusmark from "../assets/imgs/plusmark.png";
import reviewsSnapshot from "../assets/imgs/reviewsSnapshot.png";
import customerLead from "../assets/imgs/customerLead.png";
import stars from "../assets/imgs/stars.png";
import styles from "../css/StoreWithUs.module.css";

export function StoreWithUs() {
  return (
    <>
      <hr className={styles.faintLine} />
      <section className={styles.store}>
        <h3>Why store with us?</h3>
        <section className={styles.qualities}>
          <h2>We're safe, easy & affordable</h2>
          <button className={styles.gradientButton}>
            Get a quote
            <FaArrowRight
              style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }}
            />
          </button>
        </section>

        <section className={styles.description}>
          <section className={styles.safe}>
            <img src={safe} alt="safe" />
            <div>
              <h3>Safe</h3>
              <hr className={styles.faintLine} />
              <ul>
                <li>
                  <img src={checkmark} alt="checkmark" /> 24 hour CCTV storage
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> 10ft steel perimeter
                  ring-fencing
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> Heavy duty industrial
                  locks
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> Electronic gates
                  control access
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.easy}>
            <img src={easy} alt="easy" />
            <div>
              <h3>Easy</h3>
              <hr className={styles.faintLine} />
              <ul>
                <li>
                  <img src={checkmark} alt="checkmark" /> 24 hour access
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> Ground floor access
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> Range of sizes
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> Same day availability
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.affordable}>
            <img src={affordable} alt="affordable" />
            <div>
              <h3>Affordable</h3>
              <hr className={styles.faintLine} />
              <ul>
                <li>
                  <img src={checkmark} alt="checkmark" /> No large advertising spend
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> No expensive head office overheads
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> No long-term contracts
                </li>
                <li>
                  <img src={checkmark} alt="checkmark" /> Regular price checks
                  with competitors
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className={styles.recommendations}>
          <img src={plusmark} alt="plus mark" className={styles.plusMark} />
          <div>
            <h3>Plus, we provide a high quality, personal service</h3>
            <p>With over 50% of our new customers come from recommendations</p>
          </div>
          <div className={styles.customerLead}>
            <img src={customerLead} alt="customer lead" />
            Sarah, Customer Lead
          </div>

          <img src={stars} alt="stars" className={styles.stars} />
          <p>4.96 average rating across 167 reviews</p>
          <a href="/">See all reviews</a>
        </section>
      </section>
    </>
  );
}
