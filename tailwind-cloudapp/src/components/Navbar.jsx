import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>CloudApp</h1>
            <ul className='hidden md:flex '>
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platform</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='hidden md:flex pr-4'>
            <button className='bg-transparent border-none text-black pr-4'>
              Sign in
            </button>
            <button className='px-8 py-3'>Sign up</button>
          </div>
          <div className='md:hidden'>
            <FontAwesomeIcon icon={faBars} className='w-5' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
