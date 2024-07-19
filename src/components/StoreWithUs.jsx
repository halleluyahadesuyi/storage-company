import { FaArrowRight } from "react-icons/fa";
import styles from "../css/StoreWithUs.module.css";
import safe from "../assets/imgs/safe.png";
import easy from "../assets/imgs/easy.png";
import affordable from "../assets/imgs/affordable.png";
import checkmark from "../assets/imgs/checkmark.png";
import plusmark from "../assets/imgs/plusmark.png";
import reviewsSnapshot from "../assets/imgs/reviewsSnapshot.png";
import customerLead from "../assets/imgs/customerLead.png";
import stars from "../assets/imgs/stars.png";

export function StoreWithUs() {
  return (
    <>
      <h3>Why store with us?</h3>
      <section className={styles.qualities}>
        <h2>We're safe, easy & affordable</h2>

        {/* Button to get a quote with a gradient background and an arrow icon */}
        <button className={styles.gradientButton}>
          Get a quote
          <FaArrowRight
            style={{ padding: "0 2px 0 12px", transform: "scaleX(1.4)" }}
          />
        </button>
      </section>

      <section className={styles.safe}>
        <img src={safe} alt="safe" />

        <div>
          <h3>Safe</h3>
          <img src={checkmark} alt="checkmark" /> 24 hour CCTV storage
          <img src={checkmark} alt="checkmark" /> 10ft steel perimeter
          ring-fencing
          <img src={checkmark} alt="checkmark" /> Heavy duty industrial locks
          <img src={checkmark} alt="checkmark" /> Electronic gates control
          access
        </div>
      </section>

      <section className={styles.easy}>
        <img src={easy} alt="easy" />

        <div>
          <h3>Easy</h3>
          <img src={checkmark} alt="checkmark" /> 24 hour access
          <img src={checkmark} alt="checkmark" /> Ground floor access
          <img src={checkmark} alt="checkmark" /> Range of sizes
          <img src={checkmark} alt="checkmark" /> Same day availability
        </div>
      </section>

      <section className={styles.affordable}>
        <img src={affordable} alt="affordable" />

        <div>
          <h3>Affordable</h3>
          <img src={checkmark} alt="checkmark" /> No large advertising spend
          <img src={checkmark} alt="checkmark" /> No expensive head office
          overheads
          <img src={checkmark} alt="checkmark" /> No long-term contracts
          <img src={checkmark} alt="checkmark" /> Regular price checks with
          competitors
        </div>
      </section>

      <section>
        <img src={plusmark} alt="plus mark" />
        <div>
          <h3>Plus, we provide a high quality, personal service</h3>
          <p>With over 50% of our new customers come from recommendations</p>
        </div>
        <div>
          <img src={customerLead} alt="customer lead" />
          Sarah, Customer Lead
        </div>

        <img src={stars} alt="stars" />
        <p>4.96 average rating across 167 reviews</p>
        <p>4.96 average rating across 167 reviews</p>
        <a href="/">See all reviews</a>
      </section>
    </>
  );
}
