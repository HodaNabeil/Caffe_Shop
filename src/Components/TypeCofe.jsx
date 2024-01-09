import '../style/typeCofe.css'

import   {Link}from 'react-router-dom';

function TypeCofe() {
  return (
    <div className="  typecofe  container    ">
        <div  className=' grid md:grid-cols-2 lg:grid-cols-3  pt-[80px] pb-[70px]    gap-5 relative '>
          <div  className='bg-[#f4e8d64d] p-[20px] pt-[80px]  rounded-[35px] relative h-[300px]'>
            <img 
              className='w-[250px] absolute top-[-50px]  flex  justify-center items-center m-auto '
              src={require(`../IMg/typec1.webp`)} 
              alt="Coffee" />
            <div  className='pt-[20px]'>
              <h4 className=' mainColor   font-medium text-[18px]' >Americano</h4>
              <p className='text-[#220100db] text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div  className= ' mainColor flex  items-center justify-center  gap-[20px] my-[20px] '>
              <i className="  icontype    fa-solid fa-cart-shopping"></i>
              <i className="  icontype   fa-regular fa-heart"></i>
            </div>
            <button 
              className='secondbtn absolute bottom-[-20px] 
                m-auto left-[30%] w-[60px] py-[6px] px-[8px]  text-sm  cursor-pointer '>
              2.52$
            </button>
          </div>
          <div  className='bg-[#f4e8d64d] p-[20px] pt-[80px] my-[40px] md:m-[0]  rounded-[35px] relative h-[300px]'>
            <img 
              className='w-[250px] absolute top-[-150px]  flex  justify-center items-center m-auto '
              src={require(`../IMg/type2.webp`)} 
              alt="Coffee" />
            <div  className='pt-[20px]'>
              <h4 className=' mainColor   font-medium text-[18px]' >Cappuccino</h4>
              <p className='text-[#220100db] text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div  className= ' mainColor flex  items-center justify-center  gap-[20px] my-[20px] '>
              <i className="  icontype    fa-solid fa-cart-shopping"></i>
              <i className="  icontype   fa-regular fa-heart"></i>
            </div>
            <button 
              className=' secondbtn absolute bottom-[-20px] 
                m-auto left-[30%] w-[60px] py-[6px] px-[8px]  text-sm '>
              2.52$
              
            </button>
          </div>
          <div className=''>
            <h2 className='mainColor text-[30px]  font-bold font_2 '>Lorem ipsum dolor sit amet consectetur adipisicin</h2>
            <p className='max-w-[200px] text-[#000000e0] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicinLorem ipsum dolor sit amet consectet</p>
            <Link to={'menu'} className='mainbtn   text-center w-[110px] my-[15px]  block'>Learn</Link>
          </div>
        </div>
    </div>
  )
}

export default TypeCofe
