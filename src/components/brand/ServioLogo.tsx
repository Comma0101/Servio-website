import React from 'react';

/**
 * Servio Brand Rocket Icon + Wordmark (matches user screenshot)
 * Simple, symmetric, oval window, side fins, gold flame
 * Violet-to-blue gradient (#7b5bff → #3c73ff)
 */
const ServioLogo: React.FC<{ size?: number | string; className?: string }> = ({ size = 40, className = '' }) => (
  <span className={`inline-flex items-center gap-2 ${className}`} style={{ fontFamily: 'Inter, Nunito, Arial, sans-serif' }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Servio rocket logo"
    >
      <defs>
        <linearGradient id="servio-rocket-gradient" x1="32" y1="60" x2="32" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3c73ff" />
          <stop offset="1" stopColor="#7b5bff" />
        </linearGradient>
        <linearGradient id="servio-flame-gradient" x1="32" y1="54" x2="32" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe066" />
          <stop offset="1" stopColor="#ffb300" />
        </linearGradient>
      </defs>
      {/* Rocket body */}
      <path d="M32 4C44 18 52 44 32 60C12 44 20 18 32 4Z" fill="url(#servio-rocket-gradient)" />
      {/* Window */}
      <ellipse cx="32" cy="22" rx="6" ry="8" fill="#181825" fillOpacity="0.85" />
      {/* Left fin */}
      <path d="M20 44C14 52 14 60 28 54L32 50" fill="#7b5bff" />
      {/* Right fin */}
      <path d="M44 44C50 52 50 60 36 54L32 50" fill="#3c73ff" />
      {/* Flame (teardrop with notch) */}
      <path d="M32 54 C36 60, 36 64, 32 62 C28 64, 28 60, 32 54 Z" fill="url(#servio-flame-gradient)" />
      <path d="M32 58 Q34 61, 32 60 Q30 61, 32 58 Z" fill="#181825" fillOpacity="0.18" />
    </svg>
    <span
      style={{
        fontWeight: 800,
        fontSize: size === 40 ? 28 : Number(size) * 0.7,
        letterSpacing: '-0.02em',
        background: 'linear-gradient(90deg, #7b5bff 0%, #3c73ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'Nunito, Inter, Arial, sans-serif',
      }}
    >
      Servio
    </span>
  </span>
);

export default ServioLogo;
