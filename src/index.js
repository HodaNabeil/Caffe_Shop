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

import Order from './Page/Order';
import Cantact from './Page/Cantact';
import DessertPage from './Page/DessertPage';
import Account from './Page/Account';
import Login from './Components/Login';
import FavoritesPage from './Page/FavoritesPage';



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
    element: 
    <div className=' overflow-hidden'>
    <div className='home_page' style={{overflow:'visible'}}>
    <Header/>
    </div>
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
        <div className=' overflow-hidden'>
          <div className='home_page' style={{overflow:'visible'}}>
          <Header/>
          </div>
        <Cantact/>
        </div>
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
  ,{
    path:'/account',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
            <Header/>
      </div>
      <Account/>
    </div> 
        
  }
  ,{
    path:'/dessert',
    element:  <div className=' overflow-hidden'>
          <DessertPage/>
    </div> 
  }
  ,{
    path:'/heart',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
            <Header/>
      </div>
      <FavoritesPage/>
    
    </div> 
        
  }
  ,{
    path:'/login',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
            <Header/>
      </div>
        <Login/>
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

