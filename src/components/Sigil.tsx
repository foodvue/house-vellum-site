type SigilProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'oxblood' | 'cream';
};

const sizeMap = {
  sm: { circle: 'w-8 h-8 border', text: 'text-sm' },
  md: { circle: 'w-12 h-12 border-2', text: 'text-xl' },
  lg: { circle: 'w-20 h-20 border-2', text: 'text-3xl' },
};

export default function Sigil({ size = 'md', variant = 'oxblood' }: SigilProps) {
  const s = sizeMap[size];
  const color = variant === 'oxblood' ? 'border-oxblood text-oxblood' : 'border-cream text-cream';
  return (
    <div className={`${s.circle} rounded-full flex items-center justify-center ${color}`} aria-label="House Vellum sigil">
      <span className={`font-serif ${s.text}`}>V</span>
    </div>
  );
}
