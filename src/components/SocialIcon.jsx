export default function SocialIcon({ name }) {
  const icons = {
    bluesky: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 10.8C10.5 8.1 6.7 3.2 3.5 1.5 1.9.6 1 1 1 3.3c0 4.5 2.6 11.2 4.4 13.1 1.9 2 4.4 2.1 6.6-1.4 2.2 3.5 4.7 3.4 6.6 1.4 1.8-1.9 4.4-8.6 4.4-13.1 0-2.3-.9-2.7-2.5-1.8-3.2 1.7-7 6.6-8.5 9.3z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23 4.9c-.8.4-1.7.6-2.6.8 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-2.9 1.1A4.1 4.1 0 0 0 12.4 8c0 .4 0 .8.1 1.1C8.7 8.9 5.4 7.2 3.1 4.5c-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2.1 3.9-.8 0-1.5-.2-2.1-.6 0 2.3 1.6 4.2 3.8 4.6-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3A8.3 8.3 0 0 1 1 19.5 11.6 11.6 0 0 0 7.3 21c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />
      </svg>
    ),
    tumblr: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M14.5 21c-3 0-5-1.6-5-5V11H7.5V8.3c2.4-.6 3.4-2.6 3.6-4.8h2.7V8h3.3v3H13.8v4.4c0 1.3.6 1.9 1.7 1.9.5 0 1.1-.1 1.5-.3v3.1c-.6.3-1.6.9-2.5.9z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
