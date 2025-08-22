import React from 'react';
import { Award, Plus, X } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';
import { SkillsData } from '../App';

interface SkillsProps {
  data: SkillsData;
  onChange: (data: SkillsData) => void;
}

const Skills = ({ data, onChange }: SkillsProps) => {
  const addSkill = (type: 'technical' | 'soft') => {
    const updated = { ...data };
    updated[type] = [...updated[type], ''];
    onChange(updated);
  };

  const removeSkill = (type: 'technical' | 'soft', index: number) => {
    const updated = { ...data };
    if (updated[type].length > 1) {
      updated[type] = updated[type].filter((_, i) => i !== index);
      onChange(updated);
    }
  };

  const updateSkill = (type: 'technical' | 'soft', index: number, value: string) => {
    const updated = { ...data };
    updated[type][index] = value;
    onChange(updated);
  };

  // Initialize with empty arrays if no data
  if (data.technical.length === 0 && data.soft.length === 0) {
    onChange({
      technical: [''],
      soft: [''],
    });
    return null;
  }

  const renderSkillSection = (
    title: string,
    skills: string[],
    type: 'technical' | 'soft',
    placeholder: string
  ) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${type === 'technical' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-1">
              <Input
                label=""
                value={skill}
                onChange={(e) => updateSkill(type, index, e.target.value)}
                placeholder={placeholder}
              />
            </div>
            {skills.length > 1 && (
              <button
                onClick={() => removeSkill(type, index)}
                className="mt-2 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition-colors shadow-sm"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addSkill(type)}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors hover:bg-teal-50 px-3 py-2 rounded-lg"
        >
          <Plus className="h-4 w-4" />
          <span>Add {title.toLowerCase().slice(0, -1)}</span>
        </button>
      </div>
    </div>
  );

  return (
    <FormSection title="Skills" icon={<Award className="h-6 w-6" />}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {renderSkillSection(
          'Technical Skills',
          data.technical,
          'technical',
          'e.g., JavaScript, React, Node.js'
        )}
        {renderSkillSection(
          'Soft Skills',
          data.soft,
          'soft',
          'e.g., Leadership, Communication, Problem Solving'
        )}
      </div>
    </FormSection>
  );
};

export default Skills;