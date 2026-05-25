type SigilProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'oxblood' | 'cream';
};

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 80,
};

export default function Sigil({ size = 'md', variant = 'oxblood' }: SigilProps) {
  const px = sizeMap[size];
  const colorClass = variant === 'oxblood' ? 'text-oxblood' : 'text-cream';
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      className={colorClass}
      role="img"
      aria-label="House Vellum sigil"
    >
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
      <polygon points="50,0 54,4 50,8 46,4" fill="currentColor" />
      <polygon points="50,92 54,96 50,100 46,96" fill="currentColor" />
      <text
        x="50"
        y="64"
        fontSize="42"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-serif), Georgia, serif"
      >
        V
      </text>
    </svg>
  );
}
