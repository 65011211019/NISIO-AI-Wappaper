
import React from 'react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ value, onChange, disabled }) => {
  return (
    <div>
      <label htmlFor="prompt" className="block text-sm font-medium text-dark-subtext mb-1">
        Describe your wallpaper vision:
      </label>
      <textarea
        id="prompt"
        rows={3}
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary text-dark-text placeholder-gray-500 disabled:opacity-50 transition-colors duration-150"
        placeholder="e.g., a mystical forest under a cyberpunk moon, pixel art cat astronaut, abstract vibrant geometric shapes"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <p className="text-xs text-gray-500 mt-1">The more descriptive, the better the result!</p>
    </div>
  );
};
