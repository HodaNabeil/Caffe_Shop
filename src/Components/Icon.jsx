import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../Store/Slices/Card";

function Icon({cofe}) {
  const [activeColor, setActiveColor] =useState(false);
  const dispatch= useDispatch();



  return (
    <div  className= ' mainColor flex  items-center justify-center  gap-[20px] my-[20px] '>
    <button 
      onClick={()=> {
        dispatch(addProduct(cofe))
      }}
      >
      <i className=" icontype add-card fa-solid fa-mug-hot"></i>
      </button>
    <button 
      onClick={()=>setActiveColor(!activeColor)}
      >
      <i className={`  icontype fa-regular fa-heart ${activeColor && 'fa-solid'}`}></i>
    </button>
  </div>
  )
}

export default Icon
