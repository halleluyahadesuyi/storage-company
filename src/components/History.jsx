import nhs from "../assets/imgs/nhs.png";
import police from "../assets/imgs/police.png";
import map from "../assets/imgs/map.png";
import styles from "../css/History.module.css";

export function History() {
  return (
    <>
      <section className={styles.history}>
        <h3>Pay Less For Storage was founded in 2001</h3>
        <p>
          Since then we've provided storage for large organisations including
          the NHS and Northumbria Police as well as helping hundreds of families
          store their furniture before moving to new homes.
        </p>
        <p>
          Starting in Killingworth we now have storage sites in Brunswick,
          Morpeth, Washington and Newcastle city centre.
        </p>

        <div className={styles.authority}>
          <img src={nhs} alt="nhs authority" className={styles.nhs} />
          <img src={police} alt="police authority" />
        </div>

        <img src={map} alt="map" className={styles.map} />

        <section className={styles.stats}>
          <div className={styles.statsItem}>
            <h3>10,000+</h3>
            <h4>Customers</h4>
          </div>
          <div className={styles.statsItem}>
            <h3>18 years</h3>
            <h4>Storage experience</h4>
          </div>
          <div className={styles.statsItem}>
            <h3>5 Sites</h3>
            <h4>Across the North East</h4>
          </div>
        </section>
      </section>
    </>
  );
}
