import React from "react";
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./component/HomePage";
import Projects from "./component/Projects";

function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App;