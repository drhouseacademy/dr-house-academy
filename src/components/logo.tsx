interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`animate-heartbeat ${className}`}
    >
      <path d="M30 15 L85 50 L30 85 Z" fill="#00B4D8" opacity="0.9" />
      <path d="M45 35 C45 25 55 20 60 30 L60 55 C60 65 50 70 45 60" stroke="#E63946" strokeWidth="4" fill="none" />
      <circle cx="45" cy="35" r="5" fill="#E63946" />
      <circle cx="60" cy="55" r="4" fill="#E63946" />
      <polyline points="35,50 42,50 45,40 48,58 51,45 54,50 65,50" stroke="#E63946" strokeWidth="2" fill="none" />
    </svg>
  );
}
