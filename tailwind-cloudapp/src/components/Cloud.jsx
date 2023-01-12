import React from 'react'

function Cloud() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <p className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</p>
                <p className='text-2xl'>This is our Tech Brand.</p>
                <button className='py-3 px-6 sm:w-[60%]'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Cloud