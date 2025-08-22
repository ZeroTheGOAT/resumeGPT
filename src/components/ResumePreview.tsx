import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { PersonalInfoData, ExperienceData, EducationData, SkillsData } from '../App';

interface ResumePreviewProps {
  personalInfo: PersonalInfoData;
  summary: string;
  experience: ExperienceData[];
  education: EducationData[];
  skills: SkillsData;
}

const ResumePreview = ({ personalInfo, summary, experience, education, skills }: ResumePreviewProps) => {
  return (
    <div id="resume-preview" className="bg-white p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-blue-600">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && experience.some(exp => exp.jobTitle || exp.company) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-300 pb-1">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              exp.jobTitle || exp.company ? (
                <div key={exp.id} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.jobTitle || 'Position'}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">
                        {exp.company || 'Company'} {exp.location && `• ${exp.location}`}
                      </p>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education.some(edu => edu.degree || edu.school) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-300 pb-1">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              edu.degree || edu.school ? (
                <div key={edu.id} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {edu.degree || 'Degree'}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {edu.school || 'School'} {edu.location && `• ${edu.location}`}
                      </p>
                    </div>
                    {edu.graduationYear && (
                      <div className="text-gray-600 text-sm">
                        {edu.graduationYear}
                      </div>
                    )}
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(skills.technical.some(skill => skill.trim()) || skills.soft.some(skill => skill.trim())) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.technical.some(skill => skill.trim()) && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.filter(skill => skill.trim()).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.some(skill => skill.trim()) && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.filter(skill => skill.trim()).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;