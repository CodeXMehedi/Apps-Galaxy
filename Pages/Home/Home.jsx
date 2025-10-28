import React, { use } from 'react';
import Banner from '../../src/component/Banner/Banner';

// import { useLoaderData } from 'react-router';
import SomeApps from '../../src/component/SomeApps/SomeApps';

const Home = ({ usersPromise }) => {
  const data = use(usersPromise);
  
  // const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <SomeApps  data={data}></SomeApps>

    </div>
  );
};

export default Home;