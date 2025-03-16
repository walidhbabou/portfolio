import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import { FaGithubSquare, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'; // Importez les icônes nécessaires

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' alt='About' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
          I am WALID HBABOU, a software engineer passionate about web and mobile development. Here are my contact details:</p>
          <div className='mt-6'>
            {/* Numéro de téléphone */}
            <div className='flex items-center gap-2 text-slate-600'>
              <FaPhone className='w-5 h-5' />
              <a href='tel:+212607040821' className='hover:text-emerald-500 transition-colors'>
                +212 607 040 821
              </a>
            </div>

            {/* E-mail */}
            <div className='flex items-center gap-2 text-slate-600 mt-4'>
              <FaEnvelope className='w-5 h-5' />
              <a href='mailto:walid.hbabou1999@gmail.com' className='hover:text-emerald-500 transition-colors'>
                walid.hbabou1999@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className='flex items-center gap-2 text-slate-600 mt-4'>
              <FaLinkedin className='w-5 h-5' />
              <a
                href='https://www.linkedin.com/in/walid-hbabou-41a8a4201'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-emerald-500 transition-colors'
              >
                LinkedIn
              </a>
            </div>

            {/* GitHub */}
            <div className='flex items-center gap-2 text-slate-600 mt-4'>
              <FaGithubSquare className='w-5 h-5' />
              <a
                href='https://github.com/walidhbabou'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-emerald-500 transition-colors'
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;