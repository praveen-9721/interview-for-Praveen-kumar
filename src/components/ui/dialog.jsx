import React from 'react';

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onOpenChange}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children, className = '' }) {
  return <h2 className={`text-xl font-bold mb-4 ${className}`}>{children}</h2>;
}

export function DialogContent({ children, className = '' }) {
  return <div className={`${className}`}>{children}</div>;
}
