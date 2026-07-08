import { Link } from "react-router-dom";
import styles from "./GridCard.module.css";

export default function GridCard({
  title,
  image,
  to,
  aspect = true,
  imagePosition,
  imageZoom = 1,
  imageOffsetY = 0,
}) {
  const imageStyle = {
    ...(imagePosition ? { objectPosition: imagePosition } : {}),
    ...(imageZoom !== 1 || imageOffsetY !== 0
      ? { transform: `scale(${imageZoom}) translateY(${imageOffsetY}%)` }
      : {}),
  };

  return (
    <Link
      to={to}
      className={`${styles.card} ${aspect ? styles.aspectSquare : ""}`}
    >
      <img
        src={image}
        alt={title}
        className={styles.image}
        style={Object.keys(imageStyle).length ? imageStyle : undefined}
        loading="lazy"
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}
