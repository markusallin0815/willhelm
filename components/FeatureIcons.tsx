interface IconProps {
  color?: string;
  size?: number;
}

export function SwordIcon({ color = '#7A4A10', size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden>
      <line x1="20" y1="60" x2="60" y2="20" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="30" x2="16" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="63" r="5" stroke={color} strokeWidth="2.5" />
      <circle cx="60" cy="20" r="3" fill={color} />
    </svg>
  );
}

export function ShieldIcon({ color = '#C8831A', size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 12 L62 22 L62 44 C62 56 40 68 40 68 C40 68 18 56 18 44 L18 22 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M40 24 L40 56 M28 40 L52 40" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StarFourIcon({ color = '#7A4A10', size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 12 L44 36 L68 40 L44 44 L40 68 L36 44 L12 40 L36 36 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
