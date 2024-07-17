import { FaArrowRight } from "react-icons/fa";
import houseStorage from "../assets/imgs/houseStorage.png";
import businessStorage from "../assets/imgs/businessStorage.png";
import ruler from "../assets/imgs/ruler.png";
import building from "../assets/imgs/building.png";
import styles from "../css/StorageSelection.module.css";

export function StorageSelection () {
    return (
        <>
            <h2>I'm looking for</h2>
            <div className={styles.storage}>
                <div className={styles.houseStorage}>
                    <img src={houseStorage} alt="house storage" />
                    <div className={styles.storagelink}>House storage <FaArrowRight className={styles.arrow}/></div>
                </div>

                <div className={styles.businessStorage}>
                    <img src={businessStorage} alt="business storage" />
                    <div className={styles.storagelink}>Business storage <FaArrowRight className={styles.arrow} /></div>
                </div>
            </div>
            <div className={styles.guide}>
                <img src={ruler} alt="ruler" className={styles.ruler} />
                <h2>Not sure what size you need?</h2>
                <button>Try our size guide <FaArrowRight className={styles.arrow} /></button>
                <img src={building} alt="building" className={styles.building} />
            </div>
        </>
    )
}