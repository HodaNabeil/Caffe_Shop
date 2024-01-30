import { useState } from "react";


import '../style/carddessert.css'
function CardDesser({product}) {
  const [activeColor, setActiveColor] =useState(false);
  // const [price, setPrice] = useState(null)
  return (
    <div 
      className=" box-dessert  bg-[#fefae0] p-[10px] rounded-[6px]  relative ">
  
      <div 
        className=" image relative my-[10px]  element-center mb-[20px]">
        <img
          className="  relative  h-[250px] w-[90%] rounded-[6px]  object-cover"
          src={product.imgae} alt={product.name} />
      </div>
      <div>
        <h3 
          className=" mainColor font-bold text-[20px]  uppercase  font_2 my-[10px]"
          >
            {product.name}
        </h3>
        <p className=" font-sans text-[#38040e]   font-medium">
          {product.des}
        </p>
      </div>
      <p className=" font-bold font_2 mainColor text-[22px] my-[10px]">Size</p>
      <div>
        {
          product.sizes.map((size)=> {
            return (
              <div className=" element-between font-semibold  text-[#250902] text-[17px]"> 
                <p className="  cursor-pointer  capitalize mb-[4px] ">{size.id}</p>
                <p className=" ">{size.price}</p>
              </div>
            )
          })
        }
      </div>
      <div   className=" relative  element-between my-[10px]">
        <i style={{display:"flex"}}
        onClick={()=>setActiveColor(!activeColor)}
          className={`  bg-[#de9f65] text-[#220100]  cursor-pointer rounded-[50px] w-[30px] h-[30px] element-center  text-center  fa-regular fa-heart ${activeColor && 'fa-solid'}`}>
        </i>
        <button 
          className="  absolute  mt-[10px]  w-[40px]  h-[40px] rounded-[6px]  right-1 bg-[#de9f65] text-[#fff]">
          +
        </button>
      </div>
      
    </div>
  )
}

export default CardDesser
