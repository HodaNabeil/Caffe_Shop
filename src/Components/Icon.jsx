import { useState } from "react"
import { useDispatch } from "react-redux";
import {  coffeAddProduct} from "../Store/Slices/Card";

import '../style/cardcoffe.css'

function Icon({cofe}) {
  const [activeColor, setActiveColor] =useState(false);
  const dispatch= useDispatch();



  return (
    <div  className= ' mainColor flex  items-center justify-center  gap-[20px] my-[20px] '>
    <button 
      className="add-card"
      onClick={()=> {
        dispatch(coffeAddProduct(cofe))
      }}
      >
      <i className=" icontype  fa-solid fa-mug-hot"></i>
    </button>
    <button className="  relative icon-favorite"
      onClick={()=>setActiveColor(!activeColor)}
      >
      <i className={`  icontype fa-regular fa-heart ${activeColor && 'fa-solid'}`}></i>
    </button>
  </div>
  )
}

export default Icon
