import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import github from '../assets/tools/icons8-github.svg';
import linkedin from '../assets/tools/icons8-linkedin-circled.svg';
import { motion } from 'framer-motion';
import mail from '../assets/svg/bird-animation.gif';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ityo3xq', 'template_dprk21i', form.current, 'kKXZlkboASfE1zie5').then(
      (result) => {
        console.log('form.current:', form.current);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setSent(true);
  };

  return (
    <div className='bg-slate-200 grid grid-cols-6 bg-white'>
      <div className='flex col-start-2 col-span-4 gap-10 py-28'>
        <div className='w-2/3 flex flex-col gap-4'>
          <h1 className='text-5xl font-gloria italic'>Let's Connect!</h1>
          <div className='text-xl'>If you wish to contact you can find me in social media or message me here!</div>
          <div className='flex'>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
              href='https://github.com/LoubatonAv/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full hover:shadow-[0px_6px_11px_6px_rgba(0,0,0,0.6)]'>
              <img className='h-14 w-14' alt='github svg' src={github} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
              href='https://www.linkedin.com/in/avner-loubaton/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full hover:shadow-[0px_6px_11px_6px_rgba(0,0,0,0.6)]'>
              <img className='h-14 w-14' alt='linkedin svg' src={linkedin} />
            </motion.a>
          </div>
        </div>
        {!sent ? (
          <div className='w-full flex flex-col'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col '>
              <label>Name</label>
              <input
                className='resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                type='text'
                name='from_name'
                required
              />
              <label>Email</label>
              <input
                className='resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                type='email'
                name='email_id'
                required
              />
              <label>Message</label>
              <textarea
                name='message'
                required
                rows='4'
                className='resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Your message...'></textarea>{' '}
              <motion.button
                whileTap={{
                  scale: 0.8,
                  transition: { duration: 0.1 },
                }}
                type='submit'
                data-mdb-ripple='true'
                value='Send'
                data-mdb-ripple-color='light'
                class='button w-1/4 text-xs p-2 mt-3'>
                Send
              </motion.button>
            </form>
          </div>
        ) : (
          <div className='w-full flex flex-col items-center justify-center'>
            Thanks for contacting me ,will return to you asap!🙂
            <img src={mail} alt='e-mail' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
