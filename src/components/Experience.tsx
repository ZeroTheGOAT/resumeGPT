import React from 'react';
import { Briefcase, Plus, X } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';
import Textarea from './Textarea';
import { ExperienceData } from '../App';

interface ExperienceProps {
  data: ExperienceData[];
  onChange: (data: ExperienceData[]) => void;
}

const Experience = ({ data, onChange }: ExperienceProps) => {
  const addEntry = () => {
    const newEntry: ExperienceData = {
      id: Date.now().toString(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    onChange([...data, newEntry]);
  };

  const removeEntry = (id: string) => {
    if (data.length > 1) {
      onChange(data.filter(entry => entry.id !== id));
    }
  };

  const updateEntry = (id: string, field: keyof ExperienceData, value: string | boolean) => {
    onChange(data.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  // Initialize with one empty entry if no data
  if (data.length === 0) {
    const initialEntry: ExperienceData = {
      id: '1',
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    onChange([initialEntry]);
    return null;
  }

  return (
    <FormSection title="Work Experience" icon={<Briefcase className="h-6 w-6" />}>
      <div className="space-y-8">
        {data.map((entry, index) => (
          <div key={entry.id} className="relative">
            {data.length > 1 && (
              <button
                onClick={() => removeEntry(entry.id)}
                className="absolute -top-2 -right-2 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-colors z-10 shadow-md"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <div className="space-y-4 p-6 border border-gray-200 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Job Title"
                  placeholder="Software Engineer"
                  value={entry.jobTitle}
                  onChange={(e) => updateEntry(entry.id, 'jobTitle', e.target.value)}
                />
                <Input
                  label="Company"
                  placeholder="Tech Company Inc."
                  value={entry.company}
                  onChange={(e) => updateEntry(entry.id, 'company', e.target.value)}
                />
                <Input
                  label="Location"
                  placeholder="City, State"
                  value={entry.location}
                  onChange={(e) => updateEntry(entry.id, 'location', e.target.value)}
                />
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Start Date"
                      type="month"
                      placeholder="MM/YYYY"
                      value={entry.startDate}
                      onChange={(e) => updateEntry(entry.id, 'startDate', e.target.value)}
                    />
                    <Input
                      label="End Date"
                      type="month"
                      placeholder="MM/YYYY"
                      value={entry.endDate}
                      onChange={(e) => updateEntry(entry.id, 'endDate', e.target.value)}
                      disabled={entry.current}
                    />
                  </div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={entry.current}
                      onChange={(e) => updateEntry(entry.id, 'current', e.target.checked)}
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">I currently work here</span>
                  </label>
                </div>
              </div>
              <Textarea
                label="Job Description & Achievements"
                placeholder="• Led a team of 5 developers to deliver a critical project ahead of schedule&#10;• Improved system performance by 40% through code optimization&#10;• Mentored junior developers and conducted code reviews"
                rows={4}
                value={entry.description}
                onChange={(e) => updateEntry(entry.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
        
        <button
          onClick={addEntry}
          className="w-full flex items-center justify-center space-x-2 py-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all duration-200 group"
        >
          <Plus className="h-5 w-5 text-gray-400 group-hover:text-teal-500" />
          <span className="text-gray-600 group-hover:text-teal-600 font-medium">Add Experience</span>
        </button>
      </div>
    </FormSection>
  );
};

export default Experience;