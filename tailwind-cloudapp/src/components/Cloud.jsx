import React from 'react'
import bgImg from '../assests/cyber-bg.png'

function Cloud() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <p className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</p>
                <p className='text-2xl'>This is our Tech Brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
            </div>
            <div>
              <img className='w-full' src={bgImg} alt="background image" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border-border-slate-300 rounded-xl text-center shadow-xl'>
              <p>Data Services</p>
              <div>
                <p>App Securtity</p>
                <p>Dashboard Design</p>
                <p>Cloud Management</p>
                <p>API</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cloud