import React from 'react';
import { User } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';
import { PersonalInfoData } from '../App';

interface PersonalInfoProps {
  data: PersonalInfoData;
  onChange: (data: PersonalInfoData) => void;
}

const PersonalInfo = ({ data, onChange }: PersonalInfoProps) => {
  const handleChange = (field: keyof PersonalInfoData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <FormSection title="Personal Information" icon={<User className="h-6 w-6" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={data.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          required
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="john.doe@email.com"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={data.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          required
        />
        <Input
          label="Location"
          placeholder="City, State"
          value={data.location}
          onChange={(e) => handleChange('location', e.target.value)}
        />
        <div className="md:col-span-2">
          <Input
            label="LinkedIn Profile"
            placeholder="https://linkedin.com/in/johndoe"
            value={data.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
          />
        </div>
      </div>
    </FormSection>
  );
};

export default PersonalInfo;