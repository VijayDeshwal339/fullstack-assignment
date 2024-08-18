import React from 'react';
import Logo from '../assests/Logo.png'

const Footer = () => {
  return (
    <div className='bg-black text-white px-6 py-8 lg:px-[8%] lg:py-[5%] cursor-pointer'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
        
        <div className='flex flex-col items-center text-center  lg:items-start lg:text-start gap-3'>
          <p className='font-semibold text-xl lg:text-2xl'>Abstract</p>
          <p className='font-medium text-sm lg:text-base'>Branches</p>
        </div>

        <div className='flex flex-col items-center text-center lg:items-start lg:text-start gap-3'>
          <p className='font-semibold text-xl lg:text-2xl'>Resources</p>
          <div className='font-medium text-sm lg:text-base'>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Release Notes</p>
            <p>Status</p>
          </div>
        </div>

        <div className='flex flex-col items-center text-center  lg:items-start lg:text-start gap-3'>
          <p className='font-semibold text-xl lg:text-2xl'>Community</p>
          <div className='font-medium text-sm lg:text-base'>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Dribble</p>
            <p>Podcast</p>
          </div>
        </div>

        <div className='col-span-1 items-center text-center  lg:items-start lg:text-start flex flex-col gap-7'>
      <div className='flex flex-col gap-5'>
       <p className='font-semibold text-2xl'>Company</p>
       <div className='font-medium text-base'>
         <p>About Us</p>
         <p>Carrers</p>
         <p>Legal</p>
       </div>
      </div>

      <div className='flex flex-col'>
       <p className='font-semibold text-lg'>Contact Us</p>
       <p className='font-medium text-base'>info@abstract.com</p>
      </div>

      </div>

      <div className='flex flex-col items-center text-center  lg:items-start lg:text-start text-lg font-normal lg:mt-[180px]'>
        <img src={Logo} alt='' className=' w-[30px] lg:w-[50px]' />
         <p><span className='text-base'>&#169;</span> Copyright 2022</p>
         <p>Abstract Studio Design, Inc.</p>
         <p>All rights reserved</p>

      </div>
      </div>
    </div>
  );
};

export default Footer;
