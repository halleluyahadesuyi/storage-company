import styles from "../css/Ratings.module.css";
import team from "../assets/imgs/team.png";
import stars from "../assets/imgs/stars.png";

// Define the Ratings component as a named export
export function Ratings() {
  // Render the component
  return (
    <section className={styles.ratings}>
      {/* Introductory section with company information and image */}
      <section className={styles.introSection}>
        <div>
          {/* Description about the company with highlighted text */}
          <p>
            We're a <span className={styles.highlight}>family-run</span> North
            East self storage company that's rated{" "}
            <span className={styles.highlight}>5 stars</span> by our loyal
            customers
          </p>
          <p className={styles.note}>
            * Without the High Prices of National Chains
          </p>
        </div>

        {/* Image of the company team */}
        <div className={styles.introImage}>
          <img src={team} alt="Company team" />
        </div>
      </section>

      {/* Section for displaying customer reviews */}
      <section className={styles.reviewsSection}>
        {/* Individual review cards */}
        <div className={styles.reviewCard}>
          <h3>
            Susie <img src={stars} alt="stars" className={styles.stars} />
          </h3>
          <p>
            Friendly and helpful team and super easy service. Price was the best
            I could find and no set periods of use, which was exactly what we
            needed. Would absolutely recommend and use again.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <h3>
            Chris Wandless{" "}
            <img src={stars} alt="stars" className={styles.stars} />
          </h3>
          <p>
            All staff I have dealt with have been friendly and helpful. Staff
            both on site and on the telephone have been polite, courteous and
            helpful. Excellent customer service throughout.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <h3>
            Michael Goble{" "}
            <img src={stars} alt="stars" className={styles.stars} />
          </h3>
          <p>
            Thoroughly recommend this storage company, containers are excellent
            and value for money, easy access 24/7... and Sarah and Andrew were
            always so pleasant to deal with.
          </p>
        </div>
      </section>

      {/* Footer section with average rating and review link */}
      <div className={styles.ratingSection}>
        <p>
          <strong>4.96</strong> average rating across <strong>167</strong>{" "}
          reviews <a href="/">See all reviews</a>
        </p>
      </div>
    </section>
  );
}
