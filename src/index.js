import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home';
import About from './Page/About';
import CoffeMenu from './Page/CoffeMenu';
import Header from './Components/Header';




const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home/></div>,
  },
  {
    path: "about",
    element: <div>
      <Header/>
      <About/>
      </div>,
  },
  {
    path: "menu",
    element: <div>
          <Header/>
      <CoffeMenu/>
      </div>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

