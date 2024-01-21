

import { Link } from 'react-router-dom'
import '../style/typecofe.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CardTypeCofe({name,des,price,imge }) {
  const [activeColor, setActiveColor] =useState(false);
  const dispatch= useDispatch();
  return (
    <div  className='  card-type  bg-[#f4e8d64d] p-[20px] pt-[80px]  rounded-[35px] relative h-[260px]'>
      <div   className=" relative element-center  ">
        <img 
        className='w-[250px] absolute   '
        src={require(`../IMg/${imge}`)} 
        alt={name} />
      </div>
      <div  className='pt-[20px]'>
        <h4 className=' mainColor   font-medium text-[18px]' >{name}</h4>
        <p className='text-[#220100db] text-sm'>{des}</p>
      </div>
      <div 
        className= ' mainColor flex  items-center justify-center  gap-[20px] my-[20px] '>
        <button  >
        <i 
          style={{cursor:"default"}} 
          className=" icontype    fa-solid fa-mug-hot"></i>
        </button>
        <button>
          <i 
          onClick={()=>setActiveColor(!activeColor)}
          
            className={`  icontype fa-regular fa-heart ${activeColor && 'fa-solid'}`}></i>
        </button>
      </div>
      <Link to={'/menu'} 
        className='secondbtn font_2 absolute bottom-[-20px] 
          m-auto  element-center left-[33%] translate-x-[33%] 
          w-[60px] py-[6px] px-[8px]  text-sm  cursor-pointer 
          hover:tracking-[2px] duration-[0.3s] transition-all'>
            More
      </Link>
  </div>
  )
}

export default CardTypeCofe
