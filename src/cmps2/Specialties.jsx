import React, { useState } from 'react';
import css from '../assets/tools/css.svg';
import github from '../assets/tools/github.svg';
import html from '../assets/tools/html.svg';
import js from '../assets/tools/js.svg';
import nodejs from '../assets/tools/nodejs.svg';
import postman from '../assets/tools/postman.svg';
import prisma from '../assets/tools/prisma.svg';
import remix from '../assets/tools/remix.svg';
import sass from '../assets/tools/sass.svg';
import tailwind from '../assets/tools/tailwind.svg';
import react from '../assets/tools/react.svg';
import { motion } from 'framer-motion';

const Specialties = () => {
  // https://www.youtube.com/watch?v=kT6yYSwK1oA&ab_channel=BiteSizeAcademy
  return (
    <div className=' flex flex-col gap-10 py-32 items-center bg-white'>
      <h1 className='text-5xl mb-12 font-gloria italic'>My Toolkit</h1>
      <div className='flex gap-10 text-center font-bold'>
        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}>
          <img alt='' src={react} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>ReactJS</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}>
          <img alt='' src={css} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>CSS</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 5,
            delay: 0.5,
          }}>
          <img alt='' src={github} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>GitHUB</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            delay: 0.2,
            stiffness: 100,
            damping: 5,
          }}>
          <img alt='' src={html} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Html5</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            delay: 0.3,

            type: 'spring',
            stiffness: 100,
            damping: 6,
          }}>
          <img alt='' src={js} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>JavaScript</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          transition={{
            delay: 0.1,
            stiffness: 100,
            damping: 20,
          }}>
          <img alt='' src={nodejs} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>NodeJS</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            delay: 0.1,
            stiffness: 100,
            damping: 20,
          }}>
          <img alt='' src={postman} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Postman</p>
        </motion.div>
      </div>

      <div className='flex gap-10 justify-center font-bold text-center'>
        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          transition={{
            delay: 0.1,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}>
          <img alt='' src={prisma} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Prisma</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}>
          <img alt='' src={remix} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Remix</p>
        </motion.div>

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            delay: 0.4,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}>
          <img alt='' src={sass} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Sass</p>
        </motion.div>

        {/* <div className='text-center'>
          <img alt='' src={tailwind} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Tailwind</p>
        </div> */}

        <motion.div
          className='container'
          initial={{ scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}>
          <img alt='' src={tailwind} className='h-20 w-20' />
          <p className='text-lg italic pt-2'>Tailwind</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Specialties;
