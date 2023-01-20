import React from 'react';
import SupportImg from '../assests/support.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

function Support() {
  return (
    <div className='w-full  mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img
          className='w-full h-full mix-blend-overlay object-cover'
          src={SupportImg}
        />
      </div>

      <div className='max-w-[1024] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl text-slate-300 uppercase text-center'>
            Support
          </h2>
          <h3 className='text-5xl font-bold py-6 text-center'>
            Finding the right team
          </h3>
          <p className='py-4 text-3xl text-slate-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            odit adipisci nihil rem. Porro vitae nostrum fuga nesciunt,
            voluptatem quas.
          </p>
        </div>

        <div className='gird grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FontAwesomeIcon icon={faPhone} className='w-8 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Sales</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                odit eos veritatis vero perspiciatis voluptatum explicabo
                asperiores aspernatur similique laboriosam.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                contact us <FontAwesomeIcon icon={faArrowRight} className='w-5 ml-2 mt-1'/>
              </p>
            </div>
          </div>
        </div>

        <div className='gird grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FontAwesomeIcon icon={faHeadset} className='w-8 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                odit eos veritatis vero perspiciatis voluptatum explicabo
                asperiores aspernatur similique laboriosam.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                contact us <FontAwesomeIcon icon={faArrowRight} className='w-5 ml-2 mt-1'/>
              </p>
            </div>
          </div>
        </div>

        <div className='gird grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FontAwesomeIcon icon={faPhotoFilm} className='w-8 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
              <p className='text-gray-600 text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                odit eos veritatis vero perspiciatis voluptatum explicabo
                asperiores aspernatur similique laboriosam.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>
                contact us <FontAwesomeIcon icon={faArrowRight} className='w-5 ml-2 mt-1'/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;


