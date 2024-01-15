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
import Order from './Page/Order';
import Cantact from './Page/Cantact';



const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
      <Home/>
      </>
  },
  {
    path: "/home",
    element: 
      <>
      <Home/>
      </>
  },
  {
    path: "/about",
    element: <div>
      <Header/>
      <About/>
      </div>,
  },
  {
    path: "/menu",
    element: 
    < >
        <div >
            <CoffeMenu/>
        </div>
    
    </>,
  },
  {
    path: "/contact",
    element: 
        <>
        <div className='home_page'>
          <Header/>
          </div>
        <Cantact/>
        </>
  ,
  }
  ,{
    path:'/card',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
            <Header/>
      </div>
      <Order/>
    </div> 
        
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

