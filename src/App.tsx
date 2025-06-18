import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const downloadResume = () => {
    const element = document.getElementById("resume-preview");
    if (element) {
      // @ts-ignore
      html2pdf().from(element).save("ResumeGPT.pdf");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex relative">
        {/* Main Content */}
        <main className="flex-1 lg:mr-80">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Build Your Professional Resume
              </h1>
              <p className="text-gray-600">
                Fill out the form below to create a compelling resume that showcases your experience and skills.
              </p>
            </div>

            <form className="space-y-8" id="resume-preview">
              <PersonalInfo />
              <ProfessionalSummary />
              <Experience />
              <Education />
              <Skills />

              <div className="flex justify-center pt-8 gap-4">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Save Resume
                </button>

                <button
                  type="button"
                  onClick={downloadResume}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Download PDF
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
    </div>
  );
}

export default App;
