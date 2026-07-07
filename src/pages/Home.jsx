import Layout from "../components/Layout.jsx";
import GridCard from "../components/GridCard.jsx";
import { categories } from "../data/data.js";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <GridCard
            key={cat.slug}
            title={cat.title}
            image={cat.cover}
            to={`/category/${cat.slug}`}
          />
        ))}
      </div>
    </Layout>
  );
}
