import React from 'react';
import downlood from '../../assets/assets/icon-downloads.png'
import ratingIcon from '../../assets/assets/icon-ratings.png'
import { Link } from 'react-router';
const SomeAppCard = ({ someAppData }) => {
  
  const { id } = someAppData;
  return (

    <Link to={`/appDetails/${id}`} className='shadow-md flex flex-col p-4 '>
      <img src={someAppData.image} alt="d" />
      <h3 className='text-lg flex-1 mt-2'>{someAppData.title}</h3>
      <div className='flex justify-between mt-2'>
        <button className='bg-[#F1F5E8] text-[#00D390] flex items-center gap-2 px-3 py-1 rounded-sm'>
          <img className='w-4 h-4' src={downlood} alt="" />
          <p>{someAppData.downloads}</p></button>
        <button className='bg-[#FFF0E1] text-[#FF8811] flex items-center gap-2 px-3 py-1 rounded-sm'> 
          <img className='w-4 h-4' src={ratingIcon} alt="" />
          <p> {someAppData.ratingAvg}</p></button>
      </div>
    </Link>
  );
};

export default SomeAppCard;