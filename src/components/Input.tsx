import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className={`
          w-full px-4 py-3 border border-gray-200 rounded-lg 
          focus:ring-2 focus:ring-teal-500 focus:border-transparent
          transition-all duration-200 bg-gray-50 hover:bg-white
          ${error ? 'border-red-300 bg-red-50' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;