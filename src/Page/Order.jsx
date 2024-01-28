




import '../style/page-order.css'

import Footer from '../Components/Footer'
import RightOrder from '../Components/RightOrder';
import LeftOrderPage from '../Components/LeftOrderPage';
function Order() {

  return (
    <div >
        <div  className=' container page-order    '>
            <h2
              className=' p-[20px] tracking-[2px] flex justify-center m-auto font_3 
                text-[#8f6442] text-[35px]  md:text-[40px]'>
                Your  <span className= 'font_3 text-[#fedcba] '> order </span> is read
            </h2>
            <div className=' flex  flex-col sm:flex-row justify-between gap-x-7 '>
              <LeftOrderPage/>
              <RightOrder/>
            </div>
    
        </div>

  
      <div className='home_page'>
        <Footer/>
      </div>











    </div>
  )
}

export default Order
