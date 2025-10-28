import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredInfo } from '../Utility/addToDB';
import InstalledApp from '../../src/component/InstalledApp/InstalledApp';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Installation = () => {
  const appData = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedAppData = getStoredInfo();
    const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
    const myAppList = appData.filter(app => ConvertedStoredApps.includes(app.id));
    console.log(myAppList);
    setAppList(myAppList)
  }, []);


  const parseDownloads = (str) => {
    if (typeof str !== "string") return 0;
    const lower = str.toLowerCase().trim();
    if (lower.includes("m")) return parseFloat(lower) * 1000000;
    if (lower.includes("k")) return parseFloat(lower) * 1000;
    return parseFloat(lower);
  };


  const handleSort = (type, order) => {
    setSort(`${type} (${order})`);

    if (type === "downloads") {
      const sortedList = [...appList].sort((a, b) => {
        const aVal = parseDownloads(a.downloads);
        const bVal = parseDownloads(b.downloads);
        return order === "asc" ? aVal - bVal : bVal - aVal;
      });
      setAppList(sortedList);
    }
  };

  const handleDelete = (id) => {
    const remainingApps = appList.filter(app => app.id !== id);
    setAppList(remainingApps);
    const storedApps = getStoredInfo();
    const updatedApps = storedApps.filter(appId => appId !== id);
    localStorage.setItem("Installation", JSON.stringify(updatedApps));
    toast('Removing apps...')
  };


  return (
    <>
    <div>
      
      <h2 className='font-bold text-5xl text-center mt-10 mb-6'>Your Installed Apps</h2>
      <p className='text-[#627382] text-center text-xl '>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex justify-between w-11/12 items-center m-auto mt-10'>
        <h3 className='text-xl font-semibold'>{appList.length} Apps Found</h3>

        <details className="dropdown">
          <summary className="btn m-1 text-[#627382]">Sort by Downloads<i class="fa-solid fa-caret-down"></i> {sort || ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("downloads", "desc")}>High-Low</a>
            </li>
            <li>
              <a onClick={() => handleSort("downloads", "asc")}>Low-High</a>
            </li>
          </ul>
        </details>
      </div>

      <div className='flex flex-col gap-4 mt-4 mb-10'>
        {
          appList.map(app => <InstalledApp key={app.id} app={app} handleDelete={handleDelete}></InstalledApp>)
        }
      </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Installation;