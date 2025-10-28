import React from 'react';
import { Link, NavLink } from 'react-router';
import playStoreImage from '../../assets/assets/googleplay.png';
import appStoreImage from '../../assets/assets/appstore.jpg';

import heroImage from '../../assets/assets/hero.png';


const Banner = () => {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-6xl mt-10 text-[#001931]'>We Build <br /><span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
      >Productive</span> Apps</h1>
      <p className='w-70 md:w-md lg:w-4xl m-auto my-6 text-[#627382]'>At Apps Galaxy, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex  w-[350px] justify-evenly m-auto'>

        <button className='border border-gray-400 py-2 flex gap-2 w-[150px] justify-center items-center'>
          <img src={playStoreImage} alt="Google play store" className='w-8 h-8' />
          <a href="https://play.google.com/store/games?hl=en">Google Play</a>
        </button>
        <button className='border border-gray-400 py-2 flex gap-2 w-[150px] justify-center items-center'>
          <img src={appStoreImage} alt="" className='w-8 h-8' />
          <a href="https://www.apple.com/app-store/">App Store</a>
        </button>
      </div>
      <div>
        <img src={heroImage} alt="banner image" className='w-sm  lg:w-3xl m-auto mt-10' />
      </div>
      <div className='bg-linear-to-r  from-[#632EE3] to-[#9F62F2] py-16'>
        <p className='font-semibold text-4xl text-white'>Trusted by Millions, Built for You</p>
        <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:mx-60 mt-8'>
          <div className='flex flex-col gap-2'>
            <p className='text-white'>Total Downloads</p>
            <p className='text-5xl font-bold text-white'>29.6M</p>
            <p className='text-white'>21% more than last month</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-white'>Total Reviews</p>
            <p className='text-5xl font-bold text-white'>906K</p>
            <p className='text-white'>46% more than last month</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-white'>Active Apps</p>
            <p className='text-5xl font-bold text-white'>132+</p>
            <p className='text-white'>31 more will Launch</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;