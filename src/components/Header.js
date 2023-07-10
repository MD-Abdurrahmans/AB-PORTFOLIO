import React from 'react';

// import logo
 
import logo from'../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className=' py-8'>
  
     <div  className="container mx-auto">

    <div className='flex justify-between items-center'>

      {/* image */}

      <Link to='#'>
        <img src={logo}  alt=''/>
      </Link>

      {/* button */}

      <button className='btn btn-sm'>Button</button>
    </div>

     </div>
    
    </header>;
};

export default Header;
