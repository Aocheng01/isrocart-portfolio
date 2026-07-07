import { Link } from "react-router-dom";
import styles from "./GridCard.module.css";

export default function GridCard({ title, image, to, aspect = true }) {
  return (
    <Link
      to={to}
      className={`${styles.card} ${aspect ? styles.aspectSquare : ""}`}
    >
      <img src={image} alt={title} className={styles.image} loading="lazy" />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}
