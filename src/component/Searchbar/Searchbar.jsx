import React, { useState } from 'react';
import notFound from '../../assets/assets/App-Error.png'
import AppCard from '../AppCard/AppCard';
import { Link, useNavigate } from 'react-router';


const Searchbar = ({ appData }) => {
  // console.log(appData)
  const navigate = useNavigate();
  const [searchApp, setSearchApp] = useState("");


  const filteredApps = appData.filter(app =>
    app.title.toLowerCase().includes(searchApp.toLowerCase())
  );
  return (
    <div className='w-11/12 m-auto '>

      <div className=" flex justify-between items-center">
        <p className=' text-lg my-6 font-semibold'>
          ({appData.length}) Apps Found
        </p>
        <input
          type="text"
          placeholder="Search Apps"
          value={searchApp}
          onChange={(e) => setSearchApp(e.target.value)}
          className="border border-[#627382] h-10 p-2 w-75 rounded-sm "
        />
      </div>
      <div className='  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {
          filteredApps.length > 0 ? (
            filteredApps.map((appData) => (

              <AppCard key={appData.id} appData={appData}></AppCard>

            ))
          )
            :
            (
              <div className=' w-2 lg:w-250 lg:ml-10'>
                <div className='w-[150px] md:w-100 lg:w-150 ml-30 md:ml-45 lg:ml-50 text-center'>
                  <img src={notFound} className='lg:ml-20' alt="Not found image" />
                  <p className='font-semibold text-4xl mt-10'>OPPS!! APP NOT FOUND</p>
                  <p className='text-[#627382] mt-6'>The App you are requesting is not found on our system.  please try another apps</p>
                  <button onClick={() => navigate(-1)} className='btn text-sm text-white bg-linear-to-r  from-[#632EE3] to-[#9F62F2] mt-6'>Go Back</button>
                </div>
              </div>
            )}
      </div>
    </div>
  );
};
export default Searchbar;