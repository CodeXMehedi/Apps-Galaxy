import React from 'react';
import logo from '../../assets/assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-[#001931] text-white'>
      <div className='flex flex-col lg:flex-row gap-10 p-20'>
        <div className='flex-1 lg:ml-16'>
          <div className='flex items-center gap-2'><img src={logo} alt="Brand logo" className='w-10 h-10' />Apps Galaxy</div>
          <p>At Apps Galaxy, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className='flex-1 '>
          <div className='flex flex-col h-full justify-center items-center gap-2'>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">FAQ</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
        <div className='flex-1 m-auto text-center '>
          <p>Social Links</p>
          <div className='flex  h-full justify-center items-center mt-2  gap-4'>

            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;

