import React from 'react';
import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-teal-500 p-2 rounded-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">ResumeGPT</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;