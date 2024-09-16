'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import './navbar.module.scss';

import {
  IconSearch,
  IconBrandInstagram,
  IconHome,
  IconBrandMedium,
} from '@tabler/icons-react';

import { link } from 'fs';
import { Input } from './ui/input';

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (!open) {
        if (scrollYProgress.get() < 0.05) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  // for mobile view
  const [open, setOpen] = useState(false);

  const responsiveVariants = {
    background: {
      closed: {
        opacity: 0,
      },
      opened: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.2,
        },
      },
      exit: {
        opacity: 0,
      },
    },
    button: {
      topLine: {
        closed: {
          rotate: 0,
          backgroundColor: 'rgb(255,255,255)',
        },
        opened: {
          rotate: 45,
          backgroundColor: 'rgb(255,255,255)',
        },
      },
      centerLine: {
        closed: {
          opacity: 1,
          x: 0,
          backgroundColor: 'rgb(255,255,255)',
        },
        opened: {
          x: -10,
          opacity: 0,
        },
      },
      bottomLine: {
        closed: {
          rotate: 0,
          backgroundColor: 'rgb(255,255,255)',
        },
        opened: {
          rotate: -45,
          backgroundColor: 'rgb(255,255,255)',
        },
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{}}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'flex items-center justify-between max-w-4xl fixed top-2 px-4 inset-x-0 mx-auto z-[5000]',
            className
          )}
        >
          <Link
            href={'/'}
            className="text-lg md:text-xl lg:text-2xl font-bold text-black p-1 sm:p-4 bg-white/40 border backdrop-blur-sm"
          >
            blog.JustImann<span className="text-cyan-400">_</span>
          </Link>
          <div className="flex gap-2"></div>
          {/* mobile view */}
          <div className="sm:hidden bg-white/40 border backdrop-blur-sm flex items-center justify-center">
            <button
              className={`relative hamburger hamburger--spring !flex items-center !p-1.5 ${
                open && 'is-active'
              }`}
              onClick={() => setOpen(!open)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          {/* desktop view */}
          <div className="hidden sm:flex items-center justify-center space-x-4 p-2 sm:px-8 sm:py-2 border rounded-full bg-white/50 backdrop-blur-md">
            <Link
              href="/"
              className={
                'relative text-primary items-center flex space-x-1 hover:text-primary hover:underline hover:text-blue-600'
              }
            >
              <span className="block">
                {' '}
                {/* <IconHome stroke={1.25} />{' '} */}
              </span>
              <span className="block text-sm">Homepage</span>
            </Link>

            <div className="">
              <Input
                type="text"
                placeholder="🔎 Search here "
                className="rounded-full"
              />
            </div>

            <div className="flex space-x-1">
              <Link
                href="/"
                className={
                  'relative text-primary items-center flex space-x-1 hover:text-primary hover:underline hover:text-blue-600'
                }
              >
                <IconBrandInstagram stroke={1.25} />
              </Link>
              <Link
                href="/"
                className={
                  'relative text-primary items-center flex space-x-1 hover:text-primary hover:underline hover:text-blue-600'
                }
              >
                <IconBrandMedium stroke={1.25} />
              </Link>
            </div>
          </div>
          {/* <button className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={responsiveVariants.background}
            key={'mobileMenu'}
            initial={'closed'}
            animate={'opened'}
            exit={'closed'}
            className="fixed sm:hidden inset-0 w-screen h-screen bg-black/20 backdrop-blur text-white flex flex-col items-center justify-center gap-4 z-[4000] !overflow-hidden !overflow-y-hidden"
          >
            <Link
              href="/"
              className="font-semibold text-xl text-white hover:opacity-85 transition-opacity"
              onClick={() => setOpen(!open)}
            >
              homepage
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
