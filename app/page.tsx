import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PatientForm from '@/components/forms/PatientForm';
import Link from 'next/link';

const page = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex h-screen max-h-screen'>
      {/* TODO: OTP Verification | PasskeyModal */}

      <section className='remove-scrollbar max-h-screen container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/icons/logo-full.svg'
            width={1000}
            height={1000}
            className='mb-12 h-10 w-fit'
            alt='BRAND-LOGO'
            priority
          />

          <PatientForm />

          <div className='text-14-regular flex justify-between mt-20'>
            <p className='m-0 justify-items-end text-dark-600 xl:text-left'>
              &copy; {currentYear} CarePulse
            </p>

            <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/onboarding-img.png'
        width={1000}
        height={1000}
        className='side-img max-w-[50%]'
        alt='onboarding'
        priority
      />
    </div>
  );
};

export default page;
