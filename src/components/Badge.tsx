import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'purple' | 'yellow' | 'red';
}

const variantStyles = {
  green: 'bg-emerald-900/50 text-emerald-400 border-emerald-500/50',
  blue: 'bg-blue-900/50 text-blue-400 border-blue-500/50',
  purple: 'bg-purple-900/50 text-purple-400 border-purple-500/50',
  yellow: 'bg-amber-900/50 text-amber-400 border-amber-500/50',
  red: 'bg-red-900/50 text-red-400 border-red-500/50'
};

export function Badge({ children, variant = 'blue' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}