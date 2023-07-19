import React from 'react';


// motion

import { motion } from 'framer-motion';

// varient

import { fadeIn } from '../variants';

// import img


// import from my file
import img1 from '../images/projet1-header.jpg';
import img2 from '../images/project2-header.jpg';
import img3 from '../images/project3-header.jpg';
import img4 from '../images/project4.jpg';
import img5 from '../images/project5.jpg';
import img6 from '../images/project6.jpg';
import img7 from '../images/project7.jpg';
import img8 from '../images/project8.jpg';
import img9 from '../images/project9.jpg';
import img10 from '../images/project10.jpg';
import img11 from '../images/project001.jpg';
import img12 from '../images/add1.jpg';
import img13 from '../images/add2.jpg';
import img14 from '../images/add3.jpg';
import img15 from '../images/add4.jpg';
import img16 from '../images/add5.jpg';
import img17 from '../images/add6.jpg';
import img18 from '../images/add7.jpg';
import img19 from '../images/add8.jpg';
import img20 from '../images/add9.jpg';


// import img4 from '../images/half-image/project2-header.jpg';

const Work = () => {
   return <div className='section' id='work' >

      <div className='container mx-auto '>

         <div className=' flex flex-col lg:flex-row gap-x-10  '>

            <div
               variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
               className='flex-1 flex flex-col  gap-y-12 mb-10 lg:mb-0'>
               {/* text */}
               <div>

                  <h2 className='h2  text-white lg:text-accent  leading-tight'>My Latest <br /> Work</h2>

                  <p className='max-w-sm  mb-16 text-white'>The purpose of lorem ipsum is to
                     create a natural looking block of text sentence, paragraph, page, etc.that doesn ",
                     link:'learn more</p>

                  <button className='btn btn-sm mb-10 '>View all project</button>
               </div>

               {/* img 1 */}
               <div className='group relative mb-5 overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fartorito22.github.io%2Fportfolio5%2F%3Ffbclid%3DIwAR2z-bXz5lWf9pafn276XanA6NrO0sse8l2LkCxF2YkNY8MGG7hlZgJlXSw&h=AT0dtyV5TjVQ6YpltUCdgZo6zj1_y_vLoPKmOupeI-5Q2E2EnbZv6iHii1NyDW9rrBI1W-Dxv0fDXkLKuyJqJNv2EMM8xh7YFXGmFm7Nxm9v_XD0jMyus770F80ctwkNCzQ97A' >FOREST TRAVELLER</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>PORTFOLIO</span>
                  </div>
               </div>

               {/* img 2 */}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/portfolio4/?fbclid=IwAR0LjctWFrX4GYPkxiPK_HcdVCnaDM6mJYIjEhq9MbBi9CVbILPhfjIZgDU#Home' >DEVLOPER USE</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>DEV PORTFOLIO</span>
                  </div>
               </div>

               {/* IMG 3*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/portfolio/?fbclid=IwAR0xrqd7OKHhoLFfqhtD_DSXXlulrs3fsS6KpNeiEpHHonavVEtWdy6liZc'>PERSONAL USE</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>BUSSINESS PORTFOLIO</span>
                  </div>
               </div>

               {/* IMG  4*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/PORTFOLIO-2/?fbclid=IwAR38Kt0hapfwfnGJzOayY4pnmezjc4fb5TfA4eT8qOWlviD249YIgVP-74U'>   WEB SERVER/HOSTING</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>HOSTING WEBSITE</span>
                  </div>
               </div>

               {/* IMG 5*/}

               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/portfolio7/'>MOUNTAIN HUNTER</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>BLOG WEBSITE</span>
                  </div>
               </div>


               {/* IMG 12*/}

               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img12} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='//artorito22.github.io/practice-project6/'>CREATIVE PHOTO SHOTER</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>Camera man can store photo</span>
                  </div>
               </div>


               {/* IMG 13*/}

               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img13} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='//artorito22.github.io/challenge3/'>HOMEPAGE DESIGN</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>one pages responsive Homepage </span>
                  </div>
               </div>

               {/* IMG 14*/}

               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img14} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/practice-project5/'>ARCHITECTS</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>Brand New Architects Group</span>
                  </div>
               </div>


               {/* IMG 15*/}

               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img15} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/challenge2/'>TEAM PAGE</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>Our team member page design</span>
                  </div>
               </div>


            </div>



            {/* SECOND RIGHT DIV */}
            <div
               variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
               className='flex-1 flex flex-col gap-y-10'>

               {/* img 6 */}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/doctor2Temp/'>DOCTOR TEMPLATE</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>Heath Organaization</span>
                  </div>
               </div>




               {/* img 7*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img7} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/doctor-template/'>HOSPITAL HBC</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>BOOKING WEB E COM/SITE</span>
                  </div>
               </div>


               {/* img 8 */}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img8} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/personal-portfolio/'>PERSONAL WEB</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>PORTFOLIO</span>
                  </div>
               </div>


               {/* IMG 9*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img9} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/web-portfolio/?fbclid=IwAR2sPG5uzEQybT-YHOxOaqi--okaXPf3EznlXha0GyxnceIWSpnyPBu_eB8'>  PORTFOLIO </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>YOUR PORTFOLIO</span>
                  </div>
               </div>


               {/* IMG  10*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img10} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/practice-project2/'>HARDY FOLIO</a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>PROTFOLIO/SITE</span>
                  </div>
               </div>

               {/* IMG 11*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img11} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/first-website/'>
                           Ecommerce Website/ONLY
                        </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>SHOPIFY/WITHOUT RESPONSIVE!</span>
                  </div>
               </div>


               {/* IMG 16*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img16} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='//artorito22.github.io/challenge1/'>
                           404 NOT FOUND!
                        </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>NOT FOUND PAGE DESIGN LIVE WEBSITE</span>
                  </div>
               </div>


               {/* IMG 17*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img17} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='//artorito22.github.io/facebook-login/'>
                           FACEBOOK LOGIN
                        </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>LOGIN PAGE DESIGN LIVE WEBSITE</span>
                  </div>
               </div>

               {/* IMG 18*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img18} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='//artorito22.github.io/practice-project4/'>
                           DIGITAL AGENCY
                        </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>construction group toper</span>
                  </div>
               </div>



               {/* IMG 19*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img19} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/assignment1'>
                           FLOWER SHOP
                        </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>Your choice is your life line choice</span>
                  </div>
               </div>


               {/* IMG 20*/}
               <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img20} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>

                     <span className='text-gradient'>
                        <a href='https://artorito22.github.io/assignment2/'>
                          GAMER WAY
                        </a>
                     </span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                     <span className='text-3xl text-white'>No Way to eye down just enjoy</span>
                  </div>
               </div>


            </div>
         </div>



      </div>


   </div>;
};

export default Work;
