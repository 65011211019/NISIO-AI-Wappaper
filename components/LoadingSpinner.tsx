
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-2">
      <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
      <p className="text-dark-subtext text-sm">Generating your masterpiece...</p>
    </div>
  );
};
