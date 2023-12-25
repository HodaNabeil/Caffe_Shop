import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchCoffeMenu } from '../Store/Slices/MenuCoffeSlice'
import Header from '../Components/Header'

import '../style/menuCoffe.css'
import HeroMenu from '../Components/HeroMenu';


function CoffeMenu() {
  const dispatch= useDispatch()
  const menuCoffe = useSelector((state)=> state.coffe.products)

console.log(menuCoffe)
  useEffect(()=> {
    dispatch(fetchCoffeMenu())
  },[])

  
  return (
    <div className=''>
    
    </div>
  )
}

export default CoffeMenu
