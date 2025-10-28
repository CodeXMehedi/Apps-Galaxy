import download from '../../assets/assets/icon-downloads.png'
import ratingIcon from '../../assets/assets/icon-ratings.png'
import AppCard from '../AppCard/AppCard';


const InstalledApp = ({ app, handleDelete }) => {
  
  // console.log(app)
  return (
    <div className='flex justify-between lg:items-center bg-white p-4 w-11/12 m-auto rounded-lg shadow-sm '>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-4 items-center'>
        <img className='w-30 h-30' src={app.image} alt="" />
        <div>
          <h6 className='font-semibold'>{app.title}</h6>
          <div className='flex gap-2 mt-2'>
            <button className='text-[#00D390] flex items-center gap-2 px-3 py-1 rounded-sm'>
              <img className='w-4 h-4' src={download} alt="" />
              <p>{app.downloads}</p></button>
            <button className=' text-[#FF8811] flex items-center gap-2 px-3 py-1 rounded-sm'>
              <img className='w-4 h-4' src={ratingIcon} alt="" />
              <p> {app.ratingAvg}</p></button>
            <button className='text-[#627382] '>{ app.size}</button>
          </div>
        </div>
      </div>
      <button onClick={() => handleDelete(app.id)} className='bg-[#00D390] text-white rounded-sm h-10 w-25 '>Uninstall</button>
   </div>
  );
};

export default InstalledApp;