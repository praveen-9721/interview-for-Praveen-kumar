import React from 'react';

export function Button({ children, onClick, variant = 'default', className = '' }) {
  const baseStyles = 'px-4 py-2 rounded-lg text-sm font-semibold focus:outline-none focus:ring';
  const variants = {
    default: 'bg-blue-950 text-white hover:bg-blue-800 focus:ring-blue-950',
    outline: 'border border-blue-400 text-blue-700 hover:bg-blue-200 focus:ring-blue-300',
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
