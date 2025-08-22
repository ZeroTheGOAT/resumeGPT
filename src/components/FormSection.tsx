import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const FormSection = ({ title, children, icon }: FormSectionProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-8">
        {icon && (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl text-white shadow-md">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default FormSection;