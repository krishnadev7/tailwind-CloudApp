import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
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
          <div className='md:hidden mr-5' onClick={handleClick}>
            {!nav ? (
              <FontAwesomeIcon icon={faBars} className='w-5' />
            ) : (
              <FontAwesomeIcon icon={faX} className='w-5' />
            )}
          </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>About</li>
          <li className='border-b-2 border-zinc-300 w-full'>Support</li>
          <li className='border-b-2 border-zinc-300 w-full'>Platform</li>
          <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
          <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>
              Sign In
            </button>
            <button className='px-8 py-3'>Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
