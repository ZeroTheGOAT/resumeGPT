import React from 'react';
import { GraduationCap, Plus, X } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';
import { EducationData } from '../App';

interface EducationProps {
  data: EducationData[];
  onChange: (data: EducationData[]) => void;
}

const Education = ({ data, onChange }: EducationProps) => {
  const addEntry = () => {
    const newEntry: EducationData = {
      id: Date.now().toString(),
      degree: '',
      school: '',
      location: '',
      graduationYear: '',
    };
    onChange([...data, newEntry]);
  };

  const removeEntry = (id: string) => {
    if (data.length > 1) {
      onChange(data.filter(entry => entry.id !== id));
    }
  };

  const updateEntry = (id: string, field: keyof EducationData, value: string) => {
    onChange(data.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  // Initialize with one empty entry if no data
  if (data.length === 0) {
    const initialEntry: EducationData = {
      id: '1',
      degree: '',
      school: '',
      location: '',
      graduationYear: '',
    };
    onChange([initialEntry]);
    return null;
  }

  return (
    <FormSection title="Education" icon={<GraduationCap className="h-6 w-6" />}>
      <div className="space-y-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-200 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm">
              <Input
                label="Degree"
                placeholder="Bachelor of Science in Computer Science"
                value={entry.degree}
                onChange={(e) => updateEntry(entry.id, 'degree', e.target.value)}
              />
              <Input
                label="School/University"
                placeholder="University of Technology"
                value={entry.school}
                onChange={(e) => updateEntry(entry.id, 'school', e.target.value)}
              />
              <Input
                label="Location"
                placeholder="City, State"
                value={entry.location}
                onChange={(e) => updateEntry(entry.id, 'location', e.target.value)}
              />
              <Input
                label="Graduation Year"
                placeholder="2023"
                value={entry.graduationYear}
                onChange={(e) => updateEntry(entry.id, 'graduationYear', e.target.value)}
              />
            </div>
          </div>
        ))}
        
        <button
          onClick={addEntry}
          className="w-full flex items-center justify-center space-x-2 py-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all duration-200 group"
        >
          <Plus className="h-5 w-5 text-gray-400 group-hover:text-teal-500" />
          <span className="text-gray-600 group-hover:text-teal-600 font-medium">Add Education</span>
        </button>
      </div>
    </FormSection>
  );
};

export default Education;