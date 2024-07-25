import nhs from "../assets/imgs/nhs.png";
import police from "../assets/imgs/police.png";
import map from "../assets/imgs/map.png";
import styles from "../css/CompanyHistory.module.css";

export function companyHistory() {
    return (
        <section>
            <h3>Pay Less For Storage was founded in 2001</h3>
            <p>Since then we've provided storage for large organisations including the NHS and Northumbria Police as well as helping hundreds of families store their furniture before moving to new homes.</p>
            <p>Starting in Killingworth we now have storage sites in Brunswick, Morpeth, Washington and Newcastle city centre.</p>


            <div className={styles.authority}>

            </div>
        </section>
    )
}