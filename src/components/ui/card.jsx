import React from 'react';

// Main Card Component
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl bg-white border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Content Component
export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
