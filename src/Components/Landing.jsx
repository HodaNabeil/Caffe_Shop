import '../style/landing.css'


function Landing() {
    const icons= [
      <i className='fa-solid fa-mug-saucer'></i>,
      <i className='fa-solid fa-poo'></i>,
      <i className=' fa-solid fa-champagne-glasses'></i>,
      <i className=' fa-solid fa-cookie-bite'></i>
    ]
  return (
    <div 
      className=" landing  container 
            md:py-5  flex  justify-between     ">
      <div className=' w-[48%]'>
        <h1 className='mainColor font_2  text-[30px] md:text-[45px]  font-bold'>
          Caffe <br/>
          The Best For You 
          
        </h1>
        <button 
          className="mainbtn my-[30px] text-[14px]   md:text-[18px] w-[160px] 
            hover:bg-transparent transition duration-300  
            border-[2px] border-solid border-transparent
            hover:border-[2px]  hover:border-solid   hover:border-[#220100] ">
              View Menu
        </button>
        <div  className=' flex  gap-x-[20px] md:gap-x-[30px]'>
          {
            icons.map((icon,index)=> {
              return(
                <span key={index} 
                  className='text-[20px] md:text-[30px] mianColor bg-[#e5e7eb36]  
                  cursor-pointer p-2 rounded-lg mainColor '>
                  {icon}
                </span>
              )
            })
          }
          
        </div>
      </div>
      <div className=' w-[48%]'>
        <img 
        className='  landing-img   md:max-w-[280px] lg:max-w-[400px]'
        src={require(`../IMg/landing.webp`)} alt="img_cofee" />
      </div>
    </div>
  )
}

export default Landing
