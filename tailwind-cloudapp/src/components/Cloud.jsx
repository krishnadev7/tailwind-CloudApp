import React from 'react';
import bgImg from '../assests/cyber-bg.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Cloud() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <p className='py-3 text-5xl md:text-7xl font-bold'>
            Cloud Management
          </p>
          <p className='text-2xl'>This is our Tech Brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt='background image' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2  text-slate-500'>
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                className='h-6 text-indigo-600 px-1'
              />
              App Securtity
            </p>
            <p className='flex px-4 py-4 text-slate-500'>
              <FontAwesomeIcon
                icon={faDatabase}
                className='h-6 text-indigo-600 px-1'
              />
              Dashboard Design
            </p>
            <p className='flex px-4 py-4 text-slate-500 '>
              <FontAwesomeIcon
                icon={faServer}
                className='h-6 text-indigo-600 px-1'
              />
              Cloud Management
            </p>
            <p className='flex px-4 py-4 text-slate-500'>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className='h-6 text-indigo-600 px-1'
              />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cloud;
