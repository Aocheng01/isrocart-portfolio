import Layout from "../components/Layout.jsx";
import GridCard from "../components/GridCard.jsx";
import { categories } from "../data/data.js";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <GridCard
            key={cat.slug}
            title={cat.title}
            image={cat.cover}
            imagePosition={cat.coverPosition}
            to={`/category/${cat.slug}`}
          />
        ))}
      </div>
    </Layout>
  );
}
