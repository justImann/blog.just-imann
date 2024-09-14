import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="px-4 w-full mx-auto mb-10">
      <div className="relative rounded-lg shadow shadow-cyan-50/20 bg-black border">
        <div className="relative z-10 w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
          <span className="text-sm sm:text-center text-white">
            made with ❤️ by{' '}
            <Button variant={'link'} className="p-0 text-white">
              <Link href={'https://www.instagram.com/iimannr_/'}>
                Muhamad Nur Iman
              </Link>
            </Button>
          </span>
        </div>
      </div>
    </footer>
  );
};
