import { siteInfo } from "../data/data.js";
import HeroBanner from "./HeroBanner.jsx";
import SocialIcon from "./SocialIcon.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <HeroBanner />

      <main className="flex-1">{children}</main>

      <footer className="mt-12 px-4 py-8 text-center bg-black">
        <h4 className="font-sans font-bold uppercase tracking-widest">{siteInfo.name}</h4>
        <p className="text-gray-400 text-sm mt-1">{siteInfo.role}</p>
        <a href={`mailto:${siteInfo.email}`} className="text-gray-400 text-sm underline mt-4 inline-block">
          {siteInfo.email}
        </a>
        <p className="text-gray-400 text-sm mt-8">find me elsewhere:</p>
        <div className="flex justify-center gap-4 mt-4">
          {siteInfo.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full text-white hover:bg-gray-800"
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
