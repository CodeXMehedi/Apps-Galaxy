import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetail from '../src/component/AppDetail/AppDetail';

import loader from '../src/assets/assets/logo.png'

const usersPromise = fetch('/AppsData.json').then(res => res.json());


function ImageLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img
        src={loader}
        alt="Loading..."
        className="w-40 h-40 animate-spin-slow"
      />
      <p className="mt-4 text-gray-600 text-lg font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
}


export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Suspense fallback={<ImageLoader />}>
          <Home usersPromise={usersPromise}></Home>
        </Suspense>,

      },
      {
        path: '/Apps',
        // loader: () => fetch('/AppsData.json')
        element: <Suspense fallback={<ImageLoader />}>
          <Apps usersPromise={usersPromise}></Apps>
        </Suspense>
      },

      {
        path: '/Installation',
        loader: () => fetch('/AppsData.json'),
        Component: Installation
      },

      {
        path: 'appDetails/:id',
        loader: ({ params }) => {
          return fetch('/AppsData.json')
            .then(res => res.json())
            .then(data => {

              const app = data.find(item => item.id === Number(params.id));

              return app;
            });
        },
        Component: AppDetail
      }

    ]
  }
]);