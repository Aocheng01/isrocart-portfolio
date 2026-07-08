import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { siteInfo, categories } from "../data/data.js";
import SocialIcon from "./SocialIcon.jsx";
import styles from "./Navbar.module.css";

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

  items.push({ label: "About", to: "/about" });

  return items;
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconChevron} strokeWidth="2">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconChevron} strokeWidth="2">
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconClose} strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const navItems = buildNavItems();
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  const isItemActive = (item) =>
    item.to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.to);

  const activeSection = navItems.find((i) => i.label === mobileSection);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <Link to="/" className={styles.brand} onClick={closeMobile}>
          <span className={styles.brandName}>{siteInfo.name}</span>
          <span className={styles.brandRole}>{siteInfo.role}</span>
        </Link>

        <div className={styles.navGroup}>
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children && setHovered(item.label)}
                onMouseLeave={() => item.children && setHovered(null)}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                  }
                >
                  {item.label}
                  {item.children && (
                    <span className={styles.chevronIndicator}>{hovered === item.label ? "▲" : "▼"}</span>
                  )}
                </NavLink>
                <AnimatePresence>
                  {item.children && hovered === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className={styles.dropdown}
                    >
                      <div className={styles.dropdownInner}>
                        {item.children.map((child) => (
                          <Link
                            key={child.to + child.label}
                            to={child.to}
                            className={styles.dropdownLink}
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

          <div className={styles.socialRow}>
            {siteInfo.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <button
          className={styles.burgerButton}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={styles.mobileOverlay}
          >
            <div className={styles.mobileTopRow}>
              <div>
                <p className={styles.mobileBrandName}>{siteInfo.name}</p>
                <p className={styles.mobileBrandRole}>
                  {siteInfo.role}
                </p>
              </div>
              <button onClick={closeMobile} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>

            <div className={styles.mobileBody}>
              <AnimatePresence mode="wait">
                {!mobileSection ? (
                  <motion.div
                    key="root"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.2 }}
                    className={styles.mobilePanel}
                  >
                    {navItems.map((item) => (
                      <div key={item.label} className={styles.mobileRow}>
                        {item.children ? (
                          <button
                            type="button"
                            onClick={() => setMobileSection(item.label)}
                            className={`${styles.mobileLinkButton} ${
                              isItemActive(item) ? styles.mobileLinkActive : ""
                            }`}
                          >
                            {item.label}
                            <ChevronRight />
                          </button>
                        ) : (
                          <Link
                            to={item.to}
                            className={`${styles.mobileLink} ${
                              isItemActive(item) ? styles.mobileLinkActive : ""
                            }`}
                            onClick={closeMobile}
                          >
                            {item.label}
                          </Link>
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
                    className={styles.mobilePanel}
                  >
                    <button
                      className={styles.mobileBackButton}
                      onClick={() => setMobileSection(null)}
                    >
                      <ChevronLeft /> Back
                    </button>
                    {activeSection?.children.map((child) => (
                      <Link
                        key={child.to + child.label}
                        to={child.to}
                        className={styles.mobileSubLink}
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.mobileSocialRow}>
              {siteInfo.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
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
