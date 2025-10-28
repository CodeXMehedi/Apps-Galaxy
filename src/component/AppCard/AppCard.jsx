import React from 'react';
import downlood from '../../assets/assets/icon-downloads.png'
import ratingIcon from '../../assets/assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ appData }) => {
  
  const { id, image, title, downloads, ratingAvg } = appData;

  
  return (
    <Link to={`/appDetails/${id}`} className='shadow-md flex flex-col p-4 bg-white rounded-lg'>
      <img src={image} alt="d" />
      <h3 className='text-lg flex-1 mt-2'>{title}</h3>
      <div className='flex flex-col gap-2 lg:flex-row lg:justify-between  mt-2'>
        <button className='bg-[#F1F5E8] text-[#00D390] flex items-center gap-2 px-3 py-1 rounded-sm'>
          <img className='w-4 h-4' src={downlood} alt="" />
          <p>{downloads}</p></button>
        <button className='bg-[#FFF0E1] text-[#FF8811] flex items-center gap-2 px-3 py-1 rounded-sm'>
          <img className='w-4 h-4' src={ratingIcon} alt="" />
          <p> {ratingAvg}</p></button>
      </div>
    </Link>


  );
};

export default AppCard;