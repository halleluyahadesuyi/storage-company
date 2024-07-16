import { FaArrowRight } from "react-icons/fa";
import houseStorage from "../assets/imgs/city.png";
import businessStorage from "../assets/imgs/city.png";
import styles from "../css/Home.module.css";

export function storageSelection () {
    return (
        <>
            <h3>I'm looking for</h3>
            <div className={styles.storage}>
                <div className={styles.houseStorage}>
                    <img src={houseStorage} alt="house storage" />
                    <div>House storage <FaArrowRight /></div>
                </div>

                <div className={style.businessStorage}>
                    <img src={businessStorage} alt="business storage" />
                    <div>Business storage <FaArrowRight /></div>
                </div>
            </div>
            <div className={styles.guide}>
                <img src={ruler} alt="ruler" className={ruler} />
                <div>Not sure what size you need?</div>
                <button>Try our size guide <FaArrowRight /></button>
            </div>
        </>
    )
}