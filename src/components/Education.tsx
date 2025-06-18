import React, { useState } from 'react';
import { GraduationCap, Plus, X } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';

interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  location: string;
  graduationYear: string;
}

const Education = () => {
  const [entries, setEntries] = useState<EducationEntry[]>([
    {
      id: '1',
      degree: '',
      school: '',
      location: '',
      graduationYear: '',
    },
  ]);

  const addEntry = () => {
    const newEntry: EducationEntry = {
      id: Date.now().toString(),
      degree: '',
      school: '',
      location: '',
      graduationYear: '',
    };
    setEntries([...entries, newEntry]);
  };

  const removeEntry = (id: string) => {
    if (entries.length > 1) {
      setEntries(entries.filter(entry => entry.id !== id));
    }
  };

  return (
    <FormSection title="Education" icon={<GraduationCap className="h-6 w-6" />}>
      <div className="space-y-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
              <Input
                label="Degree"
                placeholder="Bachelor of Science in Computer Science"
              />
              <Input
                label="School/University"
                placeholder="University of Technology"
              />
              <Input
                label="Location"
                placeholder="City, State"
              />
              <Input
                label="Graduation Year"
                placeholder="2023"
              />
            </div>
          </div>
        ))}
        
        <button
          onClick={addEntry}
          className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors group"
        >
          <Plus className="h-5 w-5 text-gray-400 group-hover:text-teal-500" />
          <span className="text-gray-600 group-hover:text-teal-600 font-medium">Add Education</span>
        </button>
      </div>
    </FormSection>
  );
};

export default Education;