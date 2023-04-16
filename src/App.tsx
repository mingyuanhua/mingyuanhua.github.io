import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './component/HomePage';

function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App;