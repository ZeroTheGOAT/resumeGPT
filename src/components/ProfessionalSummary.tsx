import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import FormSection from './FormSection';
import Textarea from './Textarea';
import axios from 'axios';

const ProfessionalSummary = () => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);

    const prompt = `Write a professional resume summary for a frontend developer with 2 years of experience.`;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setSummary(response.data.choices[0].message.content);
    } catch (err) {
      setSummary("Something went wrong.");
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
        onChange={(e) => setSummary(e.target.value)}
      />

      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={generateSummary}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition-all duration-200"
        >
          {loading ? 'Generating...' : 'Generate with AI'}
        </button>
      </div>

      <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-100">
        <p className="text-sm text-teal-700">
          <strong>Tip:</strong> Keep it concise (2–3 sentences) and focus on your most relevant experience and achievements.
        </p>
      </div>
    </FormSection>
  );
};

export default ProfessionalSummary;
