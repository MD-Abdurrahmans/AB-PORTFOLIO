import React from 'react';


// import image

// import image from "../assets/avatar.svg";
import image from '../assets/pp.png'

// icon

import { FaGithub, FaYoutube, FaDribbble,FaFacebook,FaLinkedin } from 'react-icons/fa';
// type animation

import { TypeAnimation } from 'react-type-animation';

//motion 
import { motion } from 'framer-motion';
// varients

import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh]  bg-img bg-img-lg flex items-center' id='home'>

    <div className='container  mx-auto ' >


      <div className='flex  flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

        {/*text  */}
        <div className='flex-1 text-center  font-secondary lg:text-left' >

          <motion.h1
            variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className=' sm:text-[35px]  font-bold  leading-[0.8]  lg:text-[60px]'>Abdurrahman Raaz</motion.h1>

          <motion.div 
            variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
          className='mb-6  text-[35px] lg:text-[60px] font-secondary  font-semibold uppercase leading-[1] '>
            <span className='mr-4 text-white'>iam a</span>
            <TypeAnimation sequence={[

              'Devloper', 2000,
              'Designer', 2000,
              'YouTuber', 2000,


            ]}
              speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
          </motion.div>

          <motion.p   variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}> lorem     Check your network connection
            Check that Firefox has permission to access the web (you might be connected but behind a firewall)

          </motion.p>

          <motion.div  
           variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
           className='flex items-center  mt-5 max-w-max gap-x-6 '>
          
            <a  className='' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
            
           <button className='btn btn-lg'>Contact Me</button></a>
           
            {/* <Link to='HELO.COM' className='text-gradient btn-link'>
            <a href='https://www.facebook.com/jxjdjjsj'>My ID</a>
            </Link> */}

            <a  className='text-gradient btn-link' href='https://www.facebook.com/jxjdjjsj'>
            
             My FB Profile
            </a>
          </motion.div>

          {/* socials */}
          <motion.div
            variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0'>
            <Link to=''>
              <FaYoutube />



            </Link>
            <a href='https://github.com/artorito22'>
              <FaGithub />

            </a>
            <a href='https://www.facebook.com/jxjdjjsj'>
              <FaFacebook />

            </a>
            <a href='https://www.linkedin.com/in/md-raj-95351223b/'>
              <FaLinkedin />

            </a>
            <Link to=''>
              <FaDribbble />

            </Link>
          </motion.div>
        </div>

        {/* image */}

        <motion.div 
          variants={fadeIn('top', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
        className='hidden lg:flex flex-1 max-w-[320px] max-h-[900px] pb-0 mb-0 lg:max-w-[482px] lg:max-h-[900px] mx-aut

        '>
          <img src={image} alt='' />
          
        </motion.div>
      </div>

    </div>


  </section>;
};

export default Banner;
