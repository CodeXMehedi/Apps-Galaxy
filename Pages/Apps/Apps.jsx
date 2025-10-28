import React, { use } from 'react';
import AppCard from '../../src/component/AppCard/AppCard';
import Searchbar from '../../src/component/Searchbar/Searchbar';

const Apps = ({ usersPromise }) => {
  const appData = use(usersPromise);
  return (
    <div className='mb-10 mt-10 '>
      
      
      <h1 className='font-bold text-4xl text-center '>Our All Applications</h1>
      <p className='text-[#627382] text-center mt-4 mb-10' >Explore All Apps on the Market developed by us. We code for Millions</p>

      
      <div className='w-11/12 m-auto '> 
        <div>
          <Searchbar appData={appData}></Searchbar>
        </div>
      </div> 
    </div>
  );
};

export default Apps;