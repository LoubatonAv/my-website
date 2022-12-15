import React from 'react';
import Hosty from '../assets/hosty2.jpg';
import Lol from '../assets/lolmemory.png';
import Whistle from '../assets/whistletabs.jpg';
import Minesweeper from '../assets/minesweeper.gif';
import Facebook from '../assets/facebook.jpg';
import Djinn from '../assets/logo.png';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Projects = () => {
  return (
    //link to projects
    <div className='' id='projects'>
      <h1 className='pt-32 text-5xl pb-10 text-center font-gloria italic'>
        Some of my projects <span className='text-xs '>(so far...)</span>
      </h1>

      <div class='flex items-center justify-center'>
        <div class='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 '>
          <motion.div whileInView={{ rotate: 0, scale: 1 }} initial={{ scale: 0, x: 0 }}>
            <div class='rounded-xl group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <div class='h-[300px] w-[465px]'>
                <img
                  class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150'
                  src={Hosty}
                  alt=''
                />
              </div>
              <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 class='font-dmserif text-3xl font-bold text-white pb-10'>Hosty</h1>
                <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  A website inspired by AirBnB.
                </p>
                <div className='text-white flex gap-2 pb-2 text-sm flex-col'>
                  <div className='gap-2 flex justify-center'>
                    <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>Sass</span>
                    <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>React</span>
                    <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>MongoDB</span>
                  </div>

                  <div className='gap-2 flex'>
                    <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>NodeJS</span>
                    <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>Socket.IO</span>
                    <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>Authentication</span>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <a
                    href='https://github.com/LoubatonAv/Hosty'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    GitHUB
                  </a>
                  <a
                    href='https://hosty-airbnb.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.1 }}>
            <div class='rounded-xl group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <div class='h-[300px] w-[465px]'>
                <img
                  class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150'
                  src={Lol}
                  alt=''
                />
              </div>
              <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 class='font-dmserif text-3xl font-bold text-white pb-10'>LoL Memory Game</h1>
                <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  Making a game out of a game.
                </p>
                <div className='text-white flex gap-2 pb-2 text-base'>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>CSS</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2'>React</span>
                </div>
                <div className='flex gap-2'>
                  <a
                    href='https://github.com/LoubatonAv/MemoryGame'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    GitHUB
                  </a>
                  <a
                    href='https://loubatonav.github.io/MemoryGame/'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.2 }}>
            <div class='rounded-xl group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <div class='h-[300px] w-[465px]'>
                <img
                  class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150'
                  src={Whistle}
                  alt=''
                />
              </div>
              <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 class='font-dmserif text-3xl font-bold text-white pb-10'>Flute Tabs</h1>
                <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  Mixing my two hobbies into one.
                </p>
                <div className='text-white flex gap-2 pb-2 text-base'>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>Tailwind</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>React</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>MongoDB</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>NodeJS</span>
                </div>
                <div className='flex gap-2'>
                  <a
                    href='https://github.com/LoubatonAv/fun-flute-sheets'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    GitHUB
                  </a>
                  <a
                    href='https://whistletab.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.3 }}>
            <div class='rounded-xl group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <div class='h-[300px] w-[465px]'>
                <img
                  class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150'
                  src={Facebook}
                  alt=''
                />
              </div>
              <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 class='font-dmserif text-3xl font-bold text-white pb-10'>Facebook Clone</h1>
                <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  A still in work Facebook clone.
                </p>
                <div className='text-white flex gap-2 pb-2 text-base'>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>Tailwind</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>CSS</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>React</span>
                </div>
                <div className='flex gap-2'>
                  <a
                    href='https://github.com/LoubatonAv/PixelPFacebook'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    GitHUB
                  </a>
                  <a
                    href='https://loubatonav.github.io/PixelPFacebook/'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.4 }}>
            <div class='rounded-xl group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <div class='h-[300px] w-[465px]'>
                <img
                  class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150'
                  src={Minesweeper}
                  alt=''
                />
              </div>
              <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 class='font-dmserif text-3xl font-bold text-white pb-10'>Mine Sweeper</h1>
                <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  Minesweeper in vanilla JavaScript.
                </p>
                <div className='text-white flex gap-2 pb-2 text-base'>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>CSS</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>Vanilla JS</span>
                </div>
                <div className='flex gap-2'>
                  <a
                    href='https://github.com/LoubatonAv/mine_sweeper'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    GitHUB
                  </a>
                  <a
                    href='https://loubatonav.github.io/mine_sweeper/'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.5 }}>
            <div class='rounded-xl group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <div class='h-[300px] w-[465px]'>
                <img
                  class='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150'
                  src={Djinn}
                  alt=''
                />
              </div>
              <div class='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div class='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h1 class='font-dmserif text-3xl font-bold text-white pb-10'>Guess who?</h1>
                <p class='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  Self learning guess who game.
                </p>
                <div className='text-white flex gap-2 pb-2 text-base'>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>JavaScript</span>
                  <span className='bg-white rounded-full font-semibold text-black py-1 px-2 '>CSS</span>
                </div>
                <div className='flex gap-2'>
                  <a
                    href='https://github.com/LoubatonAv/guesswho'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    GitHUB
                  </a>
                  <a
                    href='https://loubatonav.github.io/guesswho/'
                    target='_blank'
                    rel='noreferrer'
                    class='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='text-center justify-center py-24 text-4xl'>
        <TypeAnimation sequence={['And many more to come :).', 5000, '']} speed={155} wrapper='h1' repeat={Infinity} />
      </div>
    </div>
  );
};

export default Projects;
