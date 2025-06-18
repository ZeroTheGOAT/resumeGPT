import React, { useState } from 'react';
import { Award, Plus, X } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';

const Skills = () => {
  const [technicalSkills, setTechnicalSkills] = useState<string[]>(['']);
  const [softSkills, setSoftSkills] = useState<string[]>(['']);

  const addSkill = (type: 'technical' | 'soft') => {
    if (type === 'technical') {
      setTechnicalSkills([...technicalSkills, '']);
    } else {
      setSoftSkills([...softSkills, '']);
    }
  };

  const removeSkill = (type: 'technical' | 'soft', index: number) => {
    if (type === 'technical' && technicalSkills.length > 1) {
      setTechnicalSkills(technicalSkills.filter((_, i) => i !== index));
    } else if (type === 'soft' && softSkills.length > 1) {
      setSoftSkills(softSkills.filter((_, i) => i !== index));
    }
  };

  const updateSkill = (type: 'technical' | 'soft', index: number, value: string) => {
    if (type === 'technical') {
      const updated = [...technicalSkills];
      updated[index] = value;
      setTechnicalSkills(updated);
    } else {
      const updated = [...softSkills];
      updated[index] = value;
      setSoftSkills(updated);
    }
  };

  const renderSkillSection = (
    title: string,
    skills: string[],
    type: 'technical' | 'soft',
    placeholder: string
  ) => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
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
                className="mt-2 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addSkill(type)}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add {title.toLowerCase().slice(0, -1)}</span>
        </button>
      </div>
    </div>
  );

  return (
    <FormSection title="Skills" icon={<Award className="h-6 w-6" />}>
      <div className="space-y-8">
        {renderSkillSection(
          'Technical Skills',
          technicalSkills,
          'technical',
          'e.g., JavaScript, React, Node.js'
        )}
        {renderSkillSection(
          'Soft Skills',
          softSkills,
          'soft',
          'e.g., Leadership, Communication, Problem Solving'
        )}
      </div>
    </FormSection>
  );
};

export default Skills;