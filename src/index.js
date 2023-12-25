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
import { Provider } from 'react-redux'
import { store } from './Store/store';
import HeroMenu from './Components/HeroMenu';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home/></div>,
  },
  {
    path: "/about",
    element: <div className='home_page'>
      <Header/>
      <About/>
      </div>,
  },
  {
    path: "/menu",
    element: 
    < >
        <div className='menu-backgouned'>
          <HeroMenu/>
        </div>
        <CoffeMenu/>
    </>,
  },
  {
    path: "/contact",
    element: <div className='home_page'>
          <Header/>
  
      </div>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

