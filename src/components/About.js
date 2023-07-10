import React from 'react';
// import countup

import CountUp from 'react-countup';
// intersection ovserver

import { useInView } from 'react-intersection-observer';

// motion

import { motion } from 'framer-motion';

// varient

import { fadeIn } from '../variants';

const About = () => {

  const [ref, inView] = useInView({

    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref} >

    <div className='container mx-auto'  >

      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>

        {/* image */}
        <motion.div
          variants={fadeIn('right', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} 
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top' ></motion.div>
        {/* text */}
        <div className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>Iam a Freelencer with over 5 year Experience</h3>
          <p className='mb-6'> lorem20 Check that Firefox has permission to access the web Check that Firefox has permission to access the web</p>
          {/* states */}

        <div className=' flex lg:flex-row flex-col gap-5 lg:gap-x-6 lg:gap-x-10  mb-12'>
          
            {/* item-1 */}
            <div>

              <div className='text-[40px]  font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3} /> :
                  null}

              </div>

              <div className='font-primary sm:text-white text-sm tracking-[2px]'>
                Years of <br />
                EXperience
              </div>




            </div>

            {/* item-2 */}
            <div>

              <div className='text-[40px]  font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={15} duration={3} /> :
                  null}

                k+
              </div>

              <div className='font-primary text-sm tracking-[2px]'>
                Project <br />
                Completed
              </div>




            </div>


            {/* item-3 */}
            <div>

              <div className='text-[40px]   font-tertiary  text-gradient mb-2'>
                {inView ? <CountUp start={0} end={12} duration={3} /> :
                  null}
                k+
              </div>

              <div className='font-primary sm:text-white text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>




            </div>


          </div>


          <div className='flex gap-3 gap-x-8 items-center'>
            <a className='' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>

              <button className='btn btn-lg'>Contact Me</button></a>
            <a className='text-gradient btn-link sm:text-white' href='https://www.linkedin.com/in/md-raj-95351223b/'>

              My Linkedin Profile
            </a>
          </div>
        </div>
      </div>
    </div>


  </section>;
};

export default About;
