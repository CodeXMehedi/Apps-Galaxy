
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import downlood from '../../assets/assets/icon-downloads.png'
import ratingIcon from '../../assets/assets/icon-ratings.png'
import review from '../../assets/assets/icon-review.png'
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Searchbar from '../Searchbar/Searchbar';
import { addToStoredDB, getStoredInfo } from '../../../Pages/Utility/addToDB.js';
import { toast, ToastContainer } from 'react-toastify';


const AppDetail = () => {
  const appData = useLoaderData();
  const [open, setOpen] = useState(true);
  const appChartData = appData.ratings;
  console.log(appChartData);
  const { id } = appData;
  const handleMarkAsInstalled = id => {


    toast("Already Exist");
    addToStoredDB(id);
  }
  useEffect(() => {
    const currentInstalledItems = getStoredInfo()
    console.log(currentInstalledItems)
    if (currentInstalledItems.includes(id)) {
      setOpen(false)
    }
  }, [id])

  const { image, title, size, ratingAvg, companyName, reviews, description } = appData;


  return (
    <div>
      <div className='w-10/12 m-auto'>
        <div className='flex flex-col lg:flex-row gap-10 w-11/12 m-auto mt-10'>
          <img className='w-[325px] lg:w-[300px] h' src={image} alt="" />
          <div className='flex-1'>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p className='text-[#627382] text-lg'>Developed by <span className='font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
            <hr className='mt-6 h-px border-0 bg-gray-300' />
            <div className='flex gap-10 mt-10'>
              <div>
                <img src={downlood} alt="" />
                <p className='text-[#627382]'>Downloads</p>
                <p className='font-bold text-xl md:text-4xl lg:text-4xl'>{size}</p>
              </div>
              <div>
                <img src={ratingIcon} alt="" />
                <p className='text-[#627382]'>Average Ratings</p>
                <p className='font-bold text-xl md:text-4xl lg:text-4xl'>{ratingAvg}</p>
              </div>
              <div>
                <img src={review} alt="" />
                <p className='text-[#627382]'>Total Reviews</p>
                <p className='font-bold text-xl md:text-4xl lg:text-4xl'>{reviews}</p>
              </div>
            </div>
            <button className='bg-[#00D390] p-2 mt-10 text-white text-bold' onClick={() => {
              setOpen(false);
              handleMarkAsInstalled(id);
            }} >
              {open ? `Install Now (${size} MB)` : 'Installed'}

            </button>
          </div>
        </div>
        <hr className='mt-10 mb-6 h-px border-0 bg-gray-300' />

        <div className='w-11/12 m-auto'>
          <p className='p-4 font-semibold text-xl'>Ratings</p>
          <div className='md:hidden'>
            <BarChart layout="vertical" width={300} height={400} data={appChartData} >

              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#ff9500" barSize={40} />
            </BarChart>
          </div>
          <div className="hidden lg:block" >
            <BarChart layout="vertical" width={1000} height={400} data={appChartData} >

              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#ff9500" barSize={40} />
            </BarChart>
          </div>

        </div>
        <hr className='my-6 h-px border-0 bg-gray-300' />
        <div className='my-10'>
          <p className='font-semibold text-xl mb-4'>Description</p>
          <p className='text-[#627382]'>{description}This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
        </div>

      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppDetail;
