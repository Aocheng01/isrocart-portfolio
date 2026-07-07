import { siteInfo } from "../data/data.js";
import Navbar from "./Navbar.jsx";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles.banner}>
      {siteInfo.heroImage && (
        <img src={siteInfo.heroImage} alt="" className={styles.image} />
      )}

      <div className={styles.navWrapper}>
        <Navbar />
      </div>

      <svg
        className={styles.wave}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path d="M0,100 Q720,0 1440,100 Z" className={styles.wavePath} />
      </svg>
    </div>
  );
}
