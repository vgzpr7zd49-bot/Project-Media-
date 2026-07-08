import React from 'react';

export const Badge = ({
  children,
  color,
  variant = 'solid',
}: {
  children: React.ReactNode;
  color: string;
  variant?: 'solid' | 'outline';
}) => (
  <span
    className="px-2 py-0.5 text-[8px] uppercase tracking-widest font-bold rounded-full border"
    style={{
      backgroundColor: variant === 'solid' ? `${color}20` : 'transparent',
      color,
      borderColor: `${color}40`,
    }}
  >
    {children}
  </span>
);
