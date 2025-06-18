import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const FormSection = ({ title, children, icon }: FormSectionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center space-x-3 mb-6">
        {icon && <div className="text-teal-500">{icon}</div>}
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default FormSection;