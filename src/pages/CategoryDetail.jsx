import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import GridCard from "../components/GridCard.jsx";
import ImageLightbox from "../components/Lightbox.jsx";
import { categories } from "../data/data.js";

export default function CategoryDetail() {
  const { slug, sectionSlug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!category) {
    return (
      <Layout>
        <p className="text-center py-20 text-gray-400">Categoría no encontrada.</p>
      </Layout>
    );
  }

  const section = sectionSlug
    ? category.sections.find((s) => s.slug === sectionSlug)
    : null;

  if (section) {
    const allImages = section.groups.flatMap((g) => g.images);

    return (
      <Layout>
        <h1 className="font-sans font-bold uppercase tracking-widest text-center text-2xl py-8">
          {section.title}
        </h1>
        {section.groups.map((group) => (
          <div key={group.title} className="mt-12">
            <h2 className="font-sans font-bold uppercase tracking-widest text-center text-lg mb-4">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {group.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setLightboxIndex(allImages.indexOf(img))}
                  className="block w-full"
                >
                  <img src={img} alt={group.title} className="w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-12 px-4">
          <Link
            to={`/category/${slug}`}
            className="text-sm text-gray-400 underline uppercase tracking-widest"
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
    <Layout>
      <h1 className="font-sans font-bold uppercase tracking-widest text-center text-2xl py-8">
        {category.title}
      </h1>

      {category.sections.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {category.sections.map((s) => (
            <GridCard
              key={s.slug}
              title={s.title}
              image={s.cover}
              to={`/category/${slug}/${s.slug}`}
            />
          ))}
        </div>
      )}

      {category.gallery && category.gallery.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {category.gallery.map((img, i) => (
            <button key={img} onClick={() => setLightboxIndex(i)} className="block w-full aspect-square overflow-hidden">
              <img src={img} alt={category.title} className="w-full h-full object-cover" />
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
