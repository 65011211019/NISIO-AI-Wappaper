
import React from 'react';

interface ErrorMessageProps {
  message: string | null;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/20 border border-red-700 text-red-300 px-4 py-3 rounded-md relative my-4" role="alert">
      <strong className="font-bold">Oops! </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};
