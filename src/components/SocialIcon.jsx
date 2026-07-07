import styles from "./SocialIcon.module.css";

export default function SocialIcon({ name }) {
  const icons = {
    instagram: (
      <svg viewBox="0 0 24 24" className={styles.icon6}>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </svg>
    ),
    email: (
      <svg width="64px" height="64px" viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect>
        </g>
      </svg>
    ),
    therookies: (
      <img src="/images/social/the-rookies-icon.svg" alt="Therookies" className={styles.icon4} />
    ),
  };
  return icons[name] || null;
}

