import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm'>
        {/* Logo Section */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt='Logo' />
          <p className='w-full md:w-2/3 text-gray-600'>
            This is the best e-commerce shopping page
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-1'>
            <li>9959699670</li>
            <li>contact@page.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='w-full mt-10'>
        <hr className='border-t-2 border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-600'>
          Copyright 2024 @ forever.com All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
