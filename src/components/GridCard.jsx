import { Link } from "react-router-dom";

export default function GridCard({ title, image, to, aspect = "aspect-square" }) {
  return (
    <Link
      to={to}
      className={`relative overflow-hidden ${aspect} block group`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="font-sans font-bold uppercase tracking-widest text-center text-white text-lg md:text-2xl px-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}
