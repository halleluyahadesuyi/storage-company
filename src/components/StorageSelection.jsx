import { FaArrowRight } from "react-icons/fa";
import houseStorage from "../assets/imgs/houseStorage.png";
import businessStorage from "../assets/imgs/businessStorage.png";
import ruler from "../assets/imgs/ruler.png";
import building from "../assets/imgs/building.png";
import styles from "../css/StorageSelection.module.css";

export function StorageSelection() {
  return (
    <section className={styles.storageSelection}>
      <hr className={styles.faintLine} />
      <h2 className={styles.header}>I'm looking for</h2>
      <div className={styles.storage}>
        <div className={styles.houseStorage}>
          <img src={houseStorage} alt="house storage" />
          <div className={styles.storagelink}>
            House storage <FaArrowRight className={styles.arrow} />
          </div>
        </div>

        <div className={styles.businessStorage}>
          <img src={businessStorage} alt="business storage" />
          <div className={styles.storageLink}>
            Business storage <FaArrowRight className={styles.arrow} />
          </div>
        </div>
      </div>
      <div className={styles.guide}>
        <img src={ruler} alt="ruler" className={styles.ruler} />
        <p>Not sure what size you need?</p>
        <button>
          Try our size guide <FaArrowRight className={styles.arrow} />
        </button>
        <img src={building} alt="building" className={styles.building} />
      </div>
    </section>
  );
}
