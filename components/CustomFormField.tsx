'use client';
import { Control } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormFieldType } from '@/components/forms/PatientForm';
import React from 'react';

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  shotTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderInput = () => {
  return (
    <Input
      type='text'
      placeholder='John Doe'
      iconSrc='/images/icons/user.svg'
      iconAlt='User'
    />
  );
};

const CustomFormField = ({
  control,
  fieldType,
  name,
  label,
  placeholder,
  iconSrc,
  iconAlt,
}: CustomProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderInput />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
