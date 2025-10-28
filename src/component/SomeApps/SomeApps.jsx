import React from 'react';

import SomeAppCard from '../SomeAppCard/SomeAppCard';
import { Link } from 'react-router';

const SomeApps = ({ data }) => {
  
  const someApps = data.slice(0, 8);


  return (
    <div  className='w-11/12 m-auto'>
      <h3 className='font-bold text-4xl text-center mt-10'>Apps Found</h3>
      <p className='text-[#627382] text-center mt-4 mb-10' >Explore All Trending Apps on the Market developed by us</p>
      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {
          someApps.map(someAppData => <SomeAppCard key={someAppData.id}   someAppData={someAppData}></SomeAppCard>)
        }
      </div>
      <div className='w-30  m-auto mt-8 mb-10'>
        <button className='btn text-sm text-white bg-linear-to-r  from-[#632EE3] to-[#9F62F2] w-29'>
          <Link to='/Apps'>Show All</Link>
        </button>
     </div>
    </div>
  );
};

export default SomeApps;