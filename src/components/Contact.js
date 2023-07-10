import React from 'react';
import { FaGithub, FaYoutube, FaDribbble,FaFacebook,FaLinkedin } from 'react-icons/fa';
// type animation

import { TypeAnimation } from 'react-type-animation';

//motion 
import { motion } from 'framer-motion';
// varients

import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const Contact = () => {
  return <div className='section' id='contact'>

   <div className="container mx-auto">
   <footer className=' flex flex-col lg:flex-row lg:justify-between'>

<div class="footer-column">
  <h3 class="footer-title h2 text-accent mb-6">Lets Connect</h3>
  <p class="footer-des">Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
  <div class="media-link flex justify-ceter gap-5">
     
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
        </div>

      </div>


      {/* scond */}
      <div class="footer-column">
          <h3 class="footer-title h2 text-accent mb-6 padding-top">Let’s Message me</h3>

           <form action="">
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Your Email"/>
              {/* <textarea name="" id="" placeholder="Message" cols="30" rows="10"></textarea> */}
              <input class="btn btn-sm" type="submit" value="submit"/>
           </form>
      </div>
    </footer>
   </div>
        </div>;
};

        export default Contact;
