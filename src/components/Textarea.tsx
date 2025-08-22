import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = ({ label, error, className = '', ...props }: TextareaProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <textarea
        className={`
          w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-all duration-200 bg-white hover:border-gray-300
          resize-vertical min-h-[120px] placeholder-gray-400 text-gray-900
          ${error ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export default Textarea;