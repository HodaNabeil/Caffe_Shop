import React, { useState } from 'react';

const Slider = ({ clients }) => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const nextClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const preClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" p-[20px] w-[70%] md:w-[50%] top-[10%]
      z-[50] relative bg-[#fefae0] my-[50px] mx-auto  element-between rounded-sm">
      <button 
          className=' btnpre absolute left-[0px] bg-[#c4975e]  
          w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]'
        onClick={preClient}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
      <div className="  element-center  flex-col p-[15px] m-auto">
        <img
          className="w-[100px] object-cover h-[100px] rounded-[50px]"
          src={clients[currentClientIndex].image}
          alt={clients[currentClientIndex].name}
        />
          <p className='  text-[#777] text-[15px] md:text-[16px]
              md:leading-[25px] w-[250px] m-auto text-center mt-[15px]'>
                {clients[currentClientIndex].description}
                
          </p>
            
            <h2 
              className='min-color my-[10px] font_3 text-[22px]  font-extrabold' >
        
              {clients[currentClientIndex].name}

              <span className='  ml-[5px] text-[#c4975e] font-normal text-[16px]'>{clients[currentClientIndex].Job}</span>
            </h2>
          <div >
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star-half-stroke"></i>
          </div>
      </div>
      <button 
        className=' btnnext absolute  right-0 bg-[#c4975e]  
          w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]'
        onClick={nextClient}>
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};

export default Slider;
