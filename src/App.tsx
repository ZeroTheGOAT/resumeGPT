import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ResumePreview from './components/ResumePreview';

export interface PersonalInfoData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface ExperienceData {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface EducationData {
  id: string;
  degree: string;
  school: string;
  location: string;
  graduationYear: string;
}

export interface SkillsData {
  technical: string[];
  soft: string[];
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
  });
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [education, setEducation] = useState<EducationData[]>([]);
  const [skills, setSkills] = useState<SkillsData>({
    technical: [],
    soft: [],
  });

  const downloadResume = () => {
    const element = document.getElementById("resume-preview");
    if (element && window.html2pdf) {
      const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      // @ts-ignore
      window.html2pdf().set(opt).from(element).save();
    } else {
      alert('PDF generation is not available. Please make sure the page is fully loaded.');
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <div className="flex relative">
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${showPreview ? 'lg:mr-96' : 'lg:mr-80'}`}>
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Build Your Professional Resume
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Create a compelling resume that showcases your experience and skills with our AI-powered builder.
              </p>
            </div>

            {!showPreview ? (
              <div className="space-y-8">
                <PersonalInfo data={personalInfo} onChange={setPersonalInfo} />
                <ProfessionalSummary summary={summary} onChange={setSummary} />
                <Experience data={experience} onChange={setExperience} />
                <Education data={education} onChange={setEducation} />
                <Skills data={skills} onChange={setSkills} />

                <div className="flex justify-center pt-8 gap-4">
                  <button
                    type="button"
                    onClick={togglePreview}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Preview Resume
                  </button>
                  <button
                    type="button"
                    onClick={downloadResume}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
                  <button
                    onClick={togglePreview}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Back to Edit
                  </button>
                </div>
                <ResumePreview
                  personalInfo={personalInfo}
                  summary={summary}
                  experience={experience}
                  education={education}
                  skills={skills}
                />
              </div>
            )}
          </div>
        </main>

        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onPreview={togglePreview}
          onDownload={downloadResume}
          showPreview={showPreview}
          onGenerateSummary={() => {
            // This will be handled by the ProfessionalSummary component
          }}
        />
      </div>
    </div>
  );
}

export default App;