// The Novaforge mark: an eight-point star, after a small forged steel object.
// Geometry is computed once so the SVG stays tiny and exact.
const points = Array.from({ length: 16 }, (_, i) => {
  const r = i % 2 === 0 ? 50 : 21;
  const a = (Math.PI / 8) * i - Math.PI / 2;
  return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
}).join(" ");

export function Mark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <polygon points={points} fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="size-[1.05em] text-ink" />
      <span className="text-[0.95rem] font-semibold tracking-[-0.01em]">
        Novaforge
        <span className="mx-1.5 font-normal text-ink-3">/</span>
        <span className="font-normal text-ink-2">Studio</span>
      </span>
    </span>
  );
}
