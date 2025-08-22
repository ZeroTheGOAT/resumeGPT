import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 px-6 py-4 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-md">
            <FileText className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ResumeGPT
            </h1>
            <p className="text-sm text-gray-600 font-medium">AI-Powered Resume Builder</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-xl border border-purple-200">
          <Sparkles className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-semibold text-purple-700">Powered by AI</span>
        </div>
      </div>
    </header>
  );
};

export default Header;