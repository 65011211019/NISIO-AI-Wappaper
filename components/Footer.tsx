
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface text-center py-6 mt-12 border-t border-gray-700">
      <p className="text-dark-subtext text-sm">
        &copy; {new Date().getFullYear()} NISIO AI WALLPAPER. All rights reserved.
      </p>
      <p className="text-dark-subtext text-xs mt-1">
        Powered by Gemini AI
      </p>
    </footer>
  );
};
