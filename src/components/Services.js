import React from 'react';
// import countup

// bs arrow right up

import { BsArrowUpRight } from 'react-icons/bs'
// motion

import { motion } from 'framer-motion';

// varient

import { fadeIn } from '../variants';

// servicess data


const services = [

  {

    name: 'UI/UX DESIGN',
    discription: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.that doesn ",
    link: 'learn more'

  },
  {

    name: 'Devlopement',
    discription: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.that doesn ",
    link: 'learn more'

  },

  {

    name: 'Digital Marketting',
    discription: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.that doesn ",
    link: 'learn more'

  },

  {

    name: 'Product  Branding',
    discription: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.that doesn ",
    link: 'learn more'

  },


]

const Services = () => {

  return <section className='section mb-56' id='services'>



    <div className='container mx-auto '>


      <div className='flex flex-col lg:flex-row'>

        {/* text  & image*/}
        <motion.div
          variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

          className='flex-1    lg:bg-services lg:bg-bottom bg-no-repeat  mix-blend-lighten mb-12 lg:mb-0' >

          <h2 className='h2 text-accent mb-6'>What i Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Iam a Freelencer with over 5 year Experience</h3>


          <button className='btn  btn-sm'>See My Word</button>

        </motion.div>

        {/* servicess */}
        <motion.div
          variants={fadeIn('right', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }}
          className='flex-1'
        >

          {/* services list */}

          <div>
            {services.map((service, index) => {


              const { name, discription, link } = service;
              return <div className='border-b border-white/20 h-[146px] mb-[38px]' key={index}>

                <div className='max-w-[476px] '>
                  <h4 className='text-[20px] tracking-wider font-semibold mb-6 font-primary'>{name}</h4>
                  <p className='font-secondary leading-tight '>{discription}</p>
                </div>

                <div className='flex flex-col flex-1 items-end'>

                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>

                  <a href=''>
                    {link}
                  </a>
                </div>
              </div>
            })}
          </div>
        </motion.div>


      </div>

    </div>


  </section>;
};

export default Services;
