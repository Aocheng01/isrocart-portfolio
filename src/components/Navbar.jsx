import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { siteInfo, categories } from "../data/data.js";
import SocialIcon from "./SocialIcon.jsx";

function buildNavItems() {
  const items = [{ label: "Portfolio", to: "/" }];

  categories.forEach((cat) => {
    if (cat.sections && cat.sections.length > 0) {
      items.push({
        label: cat.title,
        to: `/category/${cat.slug}`,
        children: [
          { label: `All ${cat.title}`, to: `/category/${cat.slug}` },
          ...cat.sections.map((s) => ({
            label: s.title,
            to: `/category/${cat.slug}/${s.slug}`,
          })),
        ],
      });
    } else {
      items.push({ label: cat.title, to: `/category/${cat.slug}` });
    }
  });

  items.push({ label: "About", to: "#" });

  return items;
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2">
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const navItems = buildNavItems();
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  const activeSection = navItems.find((i) => i.label === mobileSection);

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between px-6 md:px-50 pt-6 pb-2">
        <Link to="/" className="flex flex-col leading-tight" onClick={closeMobile}>
          <span className="font-black uppercase tracking-tighter text-2xl md:text-6xl">{siteInfo.name}</span>
          <span className="text-[10px] md:text-xl uppercase tracking-widest text-gray-300">{siteInfo.role}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setHovered(item.label)}
              onMouseLeave={() => item.children && setHovered(null)}
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-base md:text-lg uppercase tracking-widest flex items-center gap-1 pb-1 border-b-2 transition-colors ${
                    isActive ? "border-white text-white" : "border-transparent text-white/80 hover:text-white"
                  }`
                }
              >
                {item.label}
                {item.children && (
                  <span className="text-[10px]">{hovered === item.label ? "▲" : "▼"}</span>
                )}
              </NavLink>
              <AnimatePresence>
                {item.children && hovered === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 min-w-[200px]"
                  >
                    <div className="bg-black border border-gray-700 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.to + child.label}
                          to={child.to}
                          className="px-4 py-2 text-sm hover:bg-gray-800 whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {siteInfo.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center border border-gray-500 rounded-full text-white hover:bg-gray-800"
            >
              <SocialIcon name={s.name} />
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-6">
              <div>
                <p className="font-black uppercase tracking-tighter text-xl">{siteInfo.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                  {siteInfo.role}
                </p>
              </div>
              <button onClick={closeMobile} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 relative">
              <AnimatePresence mode="wait">
                {!mobileSection ? (
                  <motion.div
                    key="root"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6 mt-8"
                  >
                    {navItems.map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          className="text-2xl underline underline-offset-4"
                          onClick={closeMobile}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            onClick={() => setMobileSection(item.label)}
                            aria-label={`Open ${item.label}`}
                            className="text-gray-400"
                          >
                            <ChevronRight />
                          </button>
                        )}
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="sub"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6 mt-8"
                  >
                    <button
                      className="flex items-center gap-2 text-gray-400 text-lg"
                      onClick={() => setMobileSection(null)}
                    >
                      <ChevronLeft /> Back
                    </button>
                    {activeSection?.children.map((child) => (
                      <Link
                        key={child.to + child.label}
                        to={child.to}
                        className="text-2xl"
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 py-8">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
