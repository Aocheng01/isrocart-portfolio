import { siteInfo } from "../data/data.js";
import Navbar from "./Navbar.jsx";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[180px] md:h-[280px] lg:h-[340px] bg-black overflow-hidden">
      {siteInfo.heroImage && (
        <img
          src={siteInfo.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-x-0 top-0 z-20">
        <Navbar />
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-10 md:h-16 z-10"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path d="M0,100 Q720,0 1440,100 Z" className="fill-black" />
      </svg>
    </div>
  );
}
