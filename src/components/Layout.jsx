import { motion } from "framer-motion";
import { siteInfo } from "../data/data.js";
import HeroBanner from "./HeroBanner.jsx";
import SocialIcon from "./SocialIcon.jsx";
import styles from "./Layout.module.css";

export default function Layout({ children, title }) {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <HeroBanner title={title} />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <h4 className={styles.footerTitle}>{siteInfo.name}</h4>
        <p className={styles.footerText}>{siteInfo.role}</p>
        <a href={`mailto:${siteInfo.email}`} className={styles.footerEmail}>
          {siteInfo.email}
        </a>
        <p className={styles.footerFindMe}>Find me elsewhere:</p>
        <div className={styles.socialRow}>
          {siteInfo.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>
      </footer>
    </motion.div>
  );
}