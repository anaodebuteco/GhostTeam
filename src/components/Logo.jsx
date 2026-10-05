export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="GhostTeam">
      <path d="M12 56V28C12 15 21 8 32 8s20 7 20 20v28l-7-6-6 6-7-6-7 6-7-6z" fill="#e8e8f0" />
      <circle cx="25" cy="29" r="4" fill="#0e0f14" />
      <circle cx="39" cy="29" r="4" fill="#0e0f14" />
    </svg>
  );
}
