import React from 'react';
import { User } from 'lucide-react';
import FormSection from './FormSection';
import Input from './Input';

const PersonalInfo = () => {
  return (
    <FormSection title="Personal Information" icon={<User className="h-6 w-6" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          required
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="john.doe@email.com"
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          required
        />
        <Input
          label="Location"
          placeholder="City, State"
        />
        <div className="md:col-span-2">
          <Input
            label="LinkedIn Profile"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default PersonalInfo;