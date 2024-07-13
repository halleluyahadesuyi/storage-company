import styles from "../css/Ratings.module.css";
import team from "../assets/imgs/team.png";

export function Ratings() {
  return (
    <div className={styles.ratings}>
      {/* <header className={styles.searchSection}>
            <h1>Search our locations</h1>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search locations by postcode" />
              <button>Search 🔍</button>
            </div>
            <p>Or find by town</p>
            <div className={styles.townButtons}>
              {["Morecambe", "Durham", "Penrith", "Killingworth", "Brunswick", "Byker", "Morpeth", "Washington"].map((town) => (
                <button key={town}>{town} ➔</button>
              ))}
            </div>
          </header> */}

      <section className={styles.introSection}>
        <div>
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

        <div className={styles.introImage}>
          <img src={team} alt="Company team" />
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className={styles.reviewCard}>
          <h3>Susie ⭐⭐⭐⭐⭐</h3>
          <p>
            Friendly and helpful team and super easy service. Price was the best
            I could find and no set periods of use, which was exactly what we
            needed. Would absolutely recommend and use again.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <h3>Chris Wandless ⭐⭐⭐⭐⭐</h3>
          <p>
            All staff I have dealt with have been friendly and helpful. Staff
            both on site and on the telephone have been polite, courteous and
            helpful. Excellent customer service throughout.
          </p>
        </div>
        <div className={styles.reviewCard}>
          <h3>Michael Goble ⭐⭐⭐⭐⭐</h3>
          <p>
            Thoroughly recommend this storage company, containers are excellent
            and value for money, easy access 24/7... and Sarah and Andrew were
            always so pleasant to deal with.
          </p>
        </div>
      </section>

      <footer className={styles.ratingSection}>
        <p>
          <strong>4.96</strong> average rating across <strong>167</strong>{" "}
          reviews <a href="/">See all reviews</a>
        </p>
      </footer>
    </div>
  );
}
