import React from 'react';
import { Sparkles, Eye, Download, Menu, X, Edit3 } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onPreview: () => void;
  onDownload: () => void;
  onGenerateSummary: () => void;
  showPreview: boolean;
}

const Sidebar = ({ isOpen, onToggle, onPreview, onDownload, onGenerateSummary, showPreview }: SidebarProps) => {
  const buttons = [
    {
      icon: showPreview ? Edit3 : Eye,
      label: showPreview ? 'Edit Resume' : 'Preview Resume',
      variant: 'primary' as const,
      onClick: onPreview,
    },
    {
      icon: Download,
      label: 'Download PDF',
      variant: 'secondary' as const,
      onClick: onDownload,
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 right-0 h-screen w-80 bg-white shadow-2xl z-40
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          border-l border-gray-200
        `}
      >
        <div className="p-6 pt-16 lg:pt-6 h-full bg-gradient-to-b from-white to-gray-50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
          </div>
          
          <div className="space-y-4">
            {buttons.map((button, index) => {
              const Icon = button.icon;
              const isPrimary = button.variant === 'primary';
              
              return (
                <button
                  key={index}
                  onClick={button.onClick}
                  className={`
                    w-full flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold
                    transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg
                    ${
                      isPrimary
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{button.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-blue-900">Pro Tips</h3>
            </div>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Use the AI generator for professional summaries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Preview your resume before downloading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Use bullet points for achievements</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-700 text-center">
              <strong>✨ Your resume is automatically saved as you type!</strong>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;