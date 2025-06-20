
import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, isLoading, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        w-full flex items-center justify-center px-6 py-3 border border-transparent 
        text-base font-medium rounded-md shadow-sm text-white 
        bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent 
        hover:from-brand-primary hover:via-brand-primary hover:to-brand-secondary
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-surface focus:ring-brand-accent
        transition-all duration-150 ease-in-out
        ${(disabled || isLoading) ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg transform hover:scale-105'}
      `}
    >
      {isLoading ? (
        <>
          <SpinnerIcon />
          Generating...
        </>
      ) : (
        '✨ Generate Wallpaper ✨'
      )}
    </button>
  );
};

const SpinnerIcon: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);
