import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchCoffeMenu } from '../Store/Slices/MenuCoffeSlice'


import '../style/menuCoffe.css'
import Header from '../Components/Header'
import HeroMenu from '../Components/HeroMenu'
import BtnFilter from '../Components/BtnFilter'
import CardCoffe from '../Components/CardCoffe'



function CoffeMenu() {
  const dispatch= useDispatch()
  const coffemenu = useSelector((state)=> state.coffe.products);
  const [filter ,setFilter ] =useState(coffemenu);

  const btnmenu = [...new Set(coffemenu.map((val)=>val.category))];

  function filterType (cat) {
  const filtered= coffemenu.filter((type )=> type.category === cat);
  setFilter(filtered);
  } 

  useEffect(()=> {
    dispatch(fetchCoffeMenu())
  },[dispatch])


  useEffect(()=> {
    setFilter(coffemenu)
  },[coffemenu])

  return (
    <div className='menu-backgouned '>
      <div className='background-blur '>
        <Header />
        <HeroMenu/>
        <div className='  container pt-[30px]'>
          <h2 
            className=' flex justify-center items-center 
            font_2 text-[30px] md:text-[30px]  text-[#fff]  mb-[50px]' >
              The best <span className='ml-[10px]  text-[#fff] font-bold font_3'>coffee</span>
          </h2>
        
          <BtnFilter  btnmenu={btnmenu}  filterType= {filterType} setFilter={setFilter}/>

            <div className='container-menu   grid grid-cols-2 md:grid-cols-3 pt-[40px]'>
              {
                filter.map((cofe ,index) => {
                  return <div  key={index} >
                                <CardCoffe   cofe={cofe}   />
                          </div>
                })
              }
            </div>
        </div>

      </div>
    </div>
  )
}

export default CoffeMenu
