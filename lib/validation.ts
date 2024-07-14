import { z } from 'zod';

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters.')
    .max(50, 'Name must be less than 50 characters.'),

  email: z.string().email('Invalid email address.'),
  phone: z
    .string()
    .refine(
      (phone) => /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/.test(phone),
      'Invalid phone number'
    ),
});
