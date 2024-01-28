

import '../style/right-order.css'

function RightOrder() {
  return (
    <div className=' right-order  max-w-full  w-[240px] h-[325px]  my-[40px] bg-[#b3895f] '>
  
        <div className="  p-[10px]  bg-[#b3895f] ">
          <h3 
            className=" font_3  bg-[#220100]  rounded-[50px] text-[#ffddbb]  text-[25px]   text-center font-bold  " 
          >
            Order details
          </h3>
        </div>
        <ul className="p-[10px] ">
          <li  >
            <p>Shipping</p>
            <span>Free</span>
          </li>
          <li  >
            <p>Discount</p>
            <span>25%</span>
          </li>
          <li >
            <p>Added Tax</p>
            <span >3$</span>
          </li>
          <li>
            <p>Price</p>
            <span>326$</span>
          </li>
          <li  >
            <p>total</p>
            <span>326$</span>
          </li>
        </ul>
        <div className=" check  bg-[#220100] text-[#fedcba] text-center">
        <a href='/' className="  font_2 tracking-[2px]">Check</a>
        </div>
      </div>
  
  )
}

export default RightOrder
