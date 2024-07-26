import styles from "../css/Reviews.module.css";
import stars from "../assets/imgs/stars.png";

export function Reviews() {
  return (
    <>
      <hr className={styles.faintLine} />
      <section className={styles.reviews}>
        <h2>
          Self storage rated
          <br />
          <span className={styles.highlight}>5 stars</span> by our customers
        </h2>

        {/* Section for displaying customer reviews */}
        <section className={styles.reviewsSection}>
          {/* Individual review cards */}
          <div className={styles.reviewCard}>
            <h3>
              Susie <img src={stars} alt="stars" className={styles.stars} />
            </h3>
            <p>
              Friendly and helpful team and super easy service. Price was the
              best I could find and no set periods of use, which was exactly
              what we needed. Would absolutely recommend and use again.
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
              Thoroughly recommend this storage company, containers are
              excellent and value for money, easy access 24/7... and Sarah and
              Andrew were always so pleasant to deal with.
            </p>
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
              Friendly and helpful team and super easy service. Price was the
              best I could find and no set periods of use, which was exactly
              what we needed. Would absolutely recommend and use again.
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
              Thoroughly recommend this storage company, containers are
              excellent and value for money, easy access 24/7... and Sarah and
              Andrew were always so pleasant to deal with.
            </p>
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
              Friendly and helpful team and super easy service. Price was the
              best I could find and no set periods of use, which was exactly
              what we needed. Would absolutely recommend and use again.
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
              Thoroughly recommend this storage company, containers are
              excellent and value for money, easy access 24/7... and Sarah and
              Andrew were always so pleasant to deal with.
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
    </>
  );
}
