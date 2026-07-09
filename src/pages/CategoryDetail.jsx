import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import GridCard from "../components/GridCard.jsx";
import ImageLightbox from "../components/Lightbox.jsx";
import { categories } from "../data/data.js";
import styles from "./CategoryDetail.module.css";

export default function CategoryDetail() {
  const { slug, sectionSlug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!category) {
    return (
      <Layout>
        <p className={styles.emptyState}>Categoría no encontrada.</p>
      </Layout>
    );
  }

  const section = sectionSlug
    ? category.sections.find((s) => s.slug === sectionSlug)
    : null;

  if (section) {
    const allImages = section.groups.flatMap((g) => g.images);

    return (
      <Layout title={section.title}>
        {section.groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h2 className={styles.groupTitle}>
              {group.title}
            </h2>
            <div className={styles.imageGrid2}>
              {group.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setLightboxIndex(allImages.indexOf(img))}
                  className={styles.imageButton}
                >
                  <img src={img} alt={group.title} className={styles.image} />
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.backLinkWrapper}>
          <Link
            to={`/category/${slug}`}
            className={styles.backLink}
          >
            Back to {category.title}
          </Link>
        </div>
        <ImageLightbox
          images={allImages}
          index={lightboxIndex}
          open={lightboxIndex >= 0}
          onClose={() => setLightboxIndex(-1)}
        />
      </Layout>
    );
  }

  return (
    <Layout title={category.title}>
      {category.sections.length > 0 && (
        <div className={styles.sectionsGrid}>
          {category.sections.map((s) => (
            <GridCard
              key={s.slug}
              title={s.title}
              image={s.cover}
              imagePosition={s.coverPosition}
              imageZoom={s.coverZoom}
              imageOffsetY={s.coverOffsetY}
              imageOpacity={s.coverOpacity}
              imageBrightness={s.coverBrightness}
              titleFontSize={s.titleFontSize}
              to={`/category/${slug}/${s.slug}`}
            />
          ))}
        </div>
      )}

      {category.gallery && category.gallery.length > 0 && (
        <div className={styles.gridCards}>
          {category.gallery.map((img, i) => (
            <button key={img} onClick={() => setLightboxIndex(i)} className={styles.galleryButton}>
              <img src={img} alt={category.title} className={styles.galleryImage} />
            </button>
          ))}
        </div>
      )}

      <ImageLightbox
        images={category.gallery || []}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
      />
    </Layout>
  );
}
