import React, { useState } from 'react';
import avatar from '../assets/avataaars.svg';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import Radio from '@mui/material/Radio';
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import github from '../assets/tools/icons8-github.svg';
import linkedin from '../assets/tools/icons8-linkedin-circled.svg';
import { motion } from 'framer-motion';

const Intro = () => {
  const [selectedValue, setSelectedValue] = useState('c');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [width, setWidth] = useState(187);

  const theme = createTheme({
    palette: {
      blue: {
        main: blue[100],
      },
      blue1: {
        main: blue[200],
      },
      blue2: {
        main: blue[300],
      },
      blue3: {
        main: blue[400],
      },
    },
  });

  return (
    <div>
      <div className='relative flex '>
        <div className='flex absolute top-72 '>
          <div>
            <div className=' text-sm '>Adjust bio length</div>
            <ThemeProvider theme={theme}>
              <div className='flex pt-1'>
                <div>
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value='a'
                    name='radio-buttons'
                    inputProps={{ 'aria-label': 'A' }}
                    onClick={() => setWidth(30)}
                    color={'blue'}
                  />
                  <div className='text-sm'>short</div>
                </div>
                <div>
                  <Radio
                    checked={selectedValue === 'B'}
                    onChange={handleChange}
                    value='B'
                    name='radio-buttons'
                    inputProps={{ 'aria-label': 'B' }}
                    onClick={() => setWidth(155)}
                    color={'blue1'}
                  />
                  <div></div>
                </div>

                <div>
                  <Radio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value='c'
                    name='radio-buttons'
                    inputProps={{ 'aria-label': 'C' }}
                    onClick={() => setWidth(185)}
                    color={'blue2'}
                  />
                  <div></div>
                </div>

                <div>
                  <Radio
                    checked={selectedValue === 'd'}
                    onChange={handleChange}
                    value='d'
                    name='radio-buttons'
                    inputProps={{ 'aria-label': 'D' }}
                    onClick={() => setWidth(252)}
                    color={'blue3'}
                  />
                </div>
                <div>
                  <Radio
                    checked={selectedValue === 'f'}
                    onChange={handleChange}
                    value='f'
                    name='radio-buttons'
                    inputProps={{ 'aria-label': 'F' }}
                    onClick={() => setWidth(363)}
                    color={'blue3'}
                  />
                  <div className='text-sm'>long</div>
                </div>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-6 h-screen items-center pt-28'>
        <motion.div
          className='col-start-1 col-span-4 flex flex-col py-5 text-gray-500'
          style={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.1,
          }}>
          <div className='text-left gap-1 bg-white p-10 rounded-2xl'>
            <div className='font-semibold text-[#64B5F6]'>Avner Luvton</div>
            <ReactReadMoreReadLess charLimit={width} readMoreText={false} readLessText={false} ellipsis={'.'}>
              is an eager software developer who looks forward to dealing with new challenges and enjoys growing and
              learning new things as a person and as a developer. has BS.c in Information Systems. loves designing
              friendly, creative and precise user experience. has great interpersonal relations and currently lives in
              Qiryat Atta but will be more than happy to relocate 😄.
            </ReactReadMoreReadLess>
          </div>
        </motion.div>
        <motion.div
          className='col-start-5 col-span-2 flex flex-col items-center justify-center '
          style={{ x: 600 }}
          whileInView={{ x: 50 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.1,
          }}>
          <img src={avatar} alt='avatar' />
          <div className='flex gap-2 pt-2'>
            <a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
              href='https://www.linkedin.com/in/avner-loubaton/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full hover:shadow-[0px_6px_11px_6px_rgba(0,0,0,0.6)]'>
              <img className='h-14 w-14 flex' alt='linkedin svg' src={github} />
            </a>
            <a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
              href='https://www.linkedin.com/in/avner-loubaton/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full hover:shadow-[0px_6px_11px_6px_rgba(0,0,0,0.6)]'>
              <img className='h-14 w-14' alt='linkedin svg' src={linkedin} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
