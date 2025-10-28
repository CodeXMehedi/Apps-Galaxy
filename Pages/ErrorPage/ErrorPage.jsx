import React from 'react';
import notFound from '../../src/assets/assets/error-404.png'
import { useNavigate } from 'react-router';
const ErrorPage = () => {
  const navigate = useNavigate();
  return (


    <div className=' w-11/12 flex justify-center items-center mt-10 m-auto '>
      <div className='flex flex-col justify-center items-center  w-7/12 text-center'>
        <img src={notFound} className='w-50 h-50 lg:w-80 lg:h-80' alt="Not found image" />
        <p className='font-semibold text-4xl mt-10'>OPPS!! APP NOT FOUND</p>
        <p className='text-[#627382] mt-6'>The App you are requesting is not found on our system.  please try another apps</p>
        <button onClick={() => navigate(-1)} className='btn text-sm text-white bg-linear-to-r  from-[#632EE3] to-[#9F62F2] mt-6'>Go Back</button>
      </div>
    </div>

  );
};

export default ErrorPage;