import React from 'react';
import { Sparkles, Eye, Download, Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const buttons = [
    {
      icon: Sparkles,
      label: 'Generate Summary',
      variant: 'primary' as const,
      onClick: () => console.log('Generate Summary clicked'),
    },
    {
      icon: Eye,
      label: 'Preview Resume',
      variant: 'secondary' as const,
      onClick: () => console.log('Preview Resume clicked'),
    },
    {
      icon: Download,
      label: 'Download PDF',
      variant: 'secondary' as const,
      onClick: () => console.log('Download PDF clicked'),
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 right-4 z-50 bg-teal-500 text-white p-2 rounded-lg shadow-lg hover:bg-teal-600 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 right-0 h-screen w-80 bg-white shadow-xl z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          lg:shadow-lg border-l lg:border-l-0 lg:border-r border-gray-100
        `}
      >
        <div className="p-6 pt-16 lg:pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Actions</h2>
          <div className="space-y-4">
            {buttons.map((button, index) => {
              const Icon = button.icon;
              const isPrimary = button.variant === 'primary';
              
              return (
                <button
                  key={index}
                  onClick={button.onClick}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium
                    transition-all duration-200 transform hover:scale-105
                    ${
                      isPrimary
                        ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{button.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Pro Tip</h3>
            <p className="text-sm text-blue-700">
              Use "Generate Summary" to create a compelling professional summary based on your experience.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;