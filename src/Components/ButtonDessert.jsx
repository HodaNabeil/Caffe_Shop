import { useState } from "react";



function ButtonDessert({filterDessertsByCategory}) {

  const [activeButton, setActiveButton] = useState('All');

  const btns = [
    "All",
    "cheese cake",
    "brownies",
    "ice cream"
  ]
  const handleButtonClick = (category) => {
    setActiveButton(category)
    filterDessertsByCategory(category);
  
  };
  return (
  
    <div 
      className="  text-[#fff] flex justify-center m-auto text-center">
      <div  
        className=" font_2   w-[400px]  shadow-[0px_0px_14px_1px_rgba(255,0,0)]
        bg-[#fff] min-color justify-center flex gapx-[20px] rounded-[50px] px-[12px] py-[10px] ">
        {
          btns.map((btn ,index)=> {
            return <button 
            key={index}
            onClick={()=> {
              handleButtonClick(btn)
            }}
              className={` block  text-[20px] font-bold   mx-[10px]
              ${activeButton === btn 
                ?
                " bg-[#220100]  px-[10px]  w-fit h-[40px] rounded-[50px] text-[#fff]" 
                : 
                " "
              }`
              } 
              >
              {btn}
            </button>
          })
        }
      </div>
  

    </div>
      

  )
}

export default ButtonDessert
