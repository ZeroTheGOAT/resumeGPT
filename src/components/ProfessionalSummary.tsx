import React, { useState } from 'react';
import { FileText, Sparkles } from 'lucide-react';
import FormSection from './FormSection';
import Textarea from './Textarea';
import axios from 'axios';

interface ProfessionalSummaryProps {
  summary: string;
  onChange: (summary: string) => void;
}

const ProfessionalSummary = ({ summary, onChange }: ProfessionalSummaryProps) => {
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);

    const prompt = `Write a professional resume summary for a software developer with experience in modern web technologies. Keep it concise, professional, and highlight key strengths and achievements. Make it 2-3 sentences long.`;

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        onChange("Experienced software developer with expertise in modern web technologies including React, TypeScript, and Node.js. Proven track record of delivering high-quality applications and collaborating effectively with cross-functional teams. Passionate about writing clean, maintainable code and staying current with industry best practices.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      onChange(response.data.choices[0].message.content.trim());
    } catch (err) {
      console.error('Error generating summary:', err);
      onChange("Experienced software developer with expertise in modern web technologies including React, TypeScript, and Node.js. Proven track record of delivering high-quality applications and collaborating effectively with cross-functional teams. Passionate about writing clean, maintainable code and staying current with industry best practices.");
    }

    setLoading(false);
  };

  return (
    <FormSection title="Professional Summary" icon={<FileText className="h-6 w-6" />}>
      <Textarea
        label="Summary"
        placeholder="Write a compelling professional summary that highlights your key achievements, skills, and career objectives..."
        rows={6}
        value={summary}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={generateSummary}
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center gap-2 font-semibold"
        >
          <Sparkles className="h-5 w-5" />
          {loading ? 'Generating...' : 'Generate with AI'}
        </button>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
        <p className="text-sm text-teal-700">
          <strong>💡 Tip:</strong> Keep it concise (2–3 sentences) and focus on your most relevant experience and achievements.
        </p>
      </div>
    </FormSection>
  );
};

export default ProfessionalSummary;