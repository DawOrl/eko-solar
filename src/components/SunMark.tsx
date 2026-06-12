/** Logo-słońce: pełna tarcza z promieniami, rysowane kreską jak pieczątka. */
export default function SunMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="10" fill="var(--color-sun)" stroke="currentColor" strokeWidth="2.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(angle) * 14.5;
        const y1 = 24 + Math.sin(angle) * 14.5;
        const x2 = 24 + Math.cos(angle) * 21;
        const y2 = 24 + Math.sin(angle) * 21;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
