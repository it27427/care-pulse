'use client';

import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const PatientForm = () => {
  return <div>Patient Form</div>;
};

export default PatientForm;
