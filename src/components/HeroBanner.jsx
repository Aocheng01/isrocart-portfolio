import { siteInfo } from "../data/data.js";
import Navbar from "./Navbar.jsx";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({ title }) {
  return (
    <div className={styles.banner}>
      {siteInfo.heroImage && (
        <img src={siteInfo.heroImage} alt="" className={styles.image} />
      )}

      <div className={styles.navWrapper}>
        <Navbar />
      </div>

      {title ? (
        <>
          <div className={styles.fade} />
          <h1 className={styles.overlayTitle}>{title}</h1>
        </>
      ) : (
        <svg
          className={styles.wave}
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 Q720,0 1440,100 Z" className={styles.wavePath} />
        </svg>
      )}
    </div>
  );
}
