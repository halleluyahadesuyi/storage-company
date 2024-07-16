import { FaArrowRight } from "react-icons/fa";

export function storageSelection () {
    return (
        <>
            <h3>I'm looking for</h3>
            <div className={style.storage}>
                <div className={style.houseStorage}>
                    <img src={houseStorage} alt="house storage" className="storage" />
                    <div>House storage <FaArrowRight /></div>
                </div>

                <div className={style.businessStorage}>
                    <img src={businessStorage} alt="business storage" className="storage" />
                    <div>Business storage <FaArrowRight /></div>
                </div>
            </div>
        </>
    )
}