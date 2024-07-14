'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import CustomFormField from '@/components/CustomFormField';
import SubmitButton from '@/components/SubmitButton';
import { useState } from 'react';

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'tel',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datepicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
        <section className='mb-12 space-y-4'>
          <h1 className='m-0 header'>Hi there, 👋</h1>
          <p className='m-0 text-dark-700'>Schedule your first appointment.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='name'
          label='Full Name'
          placeholder='John Doe'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='email'
          label='Email Address'
          placeholder='johndoe@gmail.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name='phone'
          label='Phone Number'
          placeholder='+8801615922742'
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
