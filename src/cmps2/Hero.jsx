import { motion } from 'framer-motion';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const Hero = () => {
  const [index, setIndex] = React.useState(0);
  const TEXTS = [`Gamer.🕹`, 'flutist.🎶', 'Amateur Baker.🎂', 'Gym goer.🏋️'];

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className='body h-[800px] bg-cover flex items-center justify-center'>
      <div className='flex flex-col items-start gap-10 text-left'>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
          className='text-6xl text-white font-extrabold '>
          <div className='text-7xl'>
            <div>Welcome :)</div>
            <br />
            <div>
              Hello! I'm Avner!.
              <br />
              I'm a developer and
              <br />
              <div>
                <TextTransition direction={'down'} springConfig={presets.slow}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
