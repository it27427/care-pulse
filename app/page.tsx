import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/icons/logo-full.svg'
            width={1000}
            height={1000}
            className='mb-12 h-10 w-fit'
            alt='BRAND-LOGO'
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default page;
