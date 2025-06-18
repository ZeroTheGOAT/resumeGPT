import React, { useState } from 'react';
import { Briefcase, Plus, X } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';
import Textarea from './Textarea';

interface ExperienceEntry {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

const Experience = () => {
  const [entries, setEntries] = useState<ExperienceEntry[]>([
    {
      id: '1',
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    },
  ]);

  const addEntry = () => {
    const newEntry: ExperienceEntry = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setEntries([...entries, newEntry]);
  };

  const removeEntry = (id: string) => {
    if (entries.length > 1) {
      setEntries(entries.filter(entry => entry.id !== id));
    }
  };

  const toggleCurrent = (id: string) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, current: !entry.current } : entry
    ));
  };

  return (
    <FormSection title="Work Experience" icon={<Briefcase className="h-6 w-6" />}>
      <div className="space-y-8">
        {entries.map((entry, index) => (
          <div key={entry.id} className="relative">
            {entries.length > 1 && (
              <button
                onClick={() => removeEntry(entry.id)}
                className="absolute -top-2 -right-2 bg-red-100 hover:bg-red-200 text-red-600 p-1 rounded-full transition-colors z-10"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <div className="space-y-4 p-6 border border-gray-100 rounded-lg bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Job Title"
                  placeholder="Software Engineer"
                />
                <Input
                  label="Company"
                  placeholder="Tech Company Inc."
                />
                <Input
                  label="Location"
                  placeholder="City, State"
                />
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Start Date"
                      type="month"
                      placeholder="MM/YYYY"
                    />
                    <Input
                      label="End Date"
                      type="month"
                      placeholder="MM/YYYY"
                      disabled={entry.current}
                    />
                  </div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={entry.current}
                      onChange={() => toggleCurrent(entry.id)}
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700">I currently work here</span>
                  </label>
                </div>
              </div>
              <Textarea
                label="Job Description & Achievements"
                placeholder="• Led a team of 5 developers to deliver a critical project ahead of schedule&#10;• Improved system performance by 40% through code optimization&#10;• Mentored junior developers and conducted code reviews"
                rows={4}
              />
            </div>
          </div>
        ))}
        
        <button
          onClick={addEntry}
          className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors group"
        >
          <Plus className="h-5 w-5 text-gray-400 group-hover:text-teal-500" />
          <span className="text-gray-600 group-hover:text-teal-600 font-medium">Add Experience</span>
        </button>
      </div>
    </FormSection>
  );
};

export default Experience;