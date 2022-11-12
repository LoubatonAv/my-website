import './App.css';
import Hero from './cmps2/Hero';
import Projects from './cmps2/Projects';
import Specialties from './cmps2/Specialties';
import Contact from './cmps2/Contact';
import Intro from './cmps2/Intro';
import Footer from './cmps2/Footer';

function App() {
  return (
    <div className='grid grid-cols-6 bg-gray-200'>
      <div className='col-span-6'>
        <Hero />
      </div>
      <div className='col-span-4 col-start-2 '>
        <Intro />
      </div>
      <div className='col-span-6 col-start-1'>
        <Specialties />
      </div>
      <div className='col-span-4 col-start-2'>
        <Projects />
      </div>
      <div className='col-span-6 col-start-1'>
        <Contact />
      </div>
      <div className='col-span-6 col-start-1'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
