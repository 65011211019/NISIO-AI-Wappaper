
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-dark-surface shadow-md py-6">
      <div className="container mx-auto px-4 text-center">
        <h1 className="app-title text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
          NISIO AI WALLPAPER
        </h1>
        <p className="text-dark-subtext mt-1">Generate unique wallpapers with the power of AI</p>
      </div>
    </header>
  );
};
