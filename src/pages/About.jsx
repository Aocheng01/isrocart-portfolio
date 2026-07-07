import Layout from "../components/Layout.jsx";
import { siteInfo } from "../data/data.js";
import styles from "./About.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <img
          src={siteInfo.aboutImage}
          alt={siteInfo.name}
          className={styles.photo}
        />
        <div className={styles.textBlock}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.text}>{siteInfo.aboutText}</p>
        </div>
      </div>
    </Layout>
  );
}
