import { useState } from "react";
import { useSelector } from "react-redux";



function BtnFilter({btnmenu ,filterType,setFilter}) {
  const [active,setActive] =useState(false);

   function  handleActive (itme) {
      setActive(itme);

    }


  const coffemenu = useSelector((state)=> state.coffe.products);
  return (
    <div className="container-btn">
        {
          btnmenu.map((btn ,index)=> {
            return (
              <button
                className={`${active ? 'active' : ' ' }`}
                onClick={()=>{
                  filterType(btn ) 
                  handleActive(btn)
                }
                  }
                  key={index} >
                {btn}
              </button>
            )
          })
        }
        <button  
          onClick={()=> setFilter(coffemenu)}
            >
            All
        </button>
    </div>
  )
}

export default BtnFilter
