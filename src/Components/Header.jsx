
import '../all.min.css'
import {Link} from 'react-router-dom'
import '../style/header.css'
import Logo from './Logo';
import Nav from './Nav';
import { useSelector } from 'react-redux';
function Header() {

  const order =useSelector((state)=> state.order);
  
  return (
    <header className="header  container">
      <Logo/>
      <Nav/>
      <div className=' nav-right flex items-center gap-x-[5px]  '>
        <Link 
            className='mainbtn  bg-transparent  w-[40px] h-[40px] text-[15px]  duration-[0.3s]  
            transition     font-normal'
          to={'/favorites'}
          >
        <i className="fa-regular fa-heart"></i>
        </Link>
        <Link
          to={'/account'}
          className='mainbtn  bg-transparent  w-[40px] h-[40px] text-[15px]  duration-[0.3s]  
            transition      font-normal'>
          <i className="fa-solid fa-user  element-center"></i>
        </Link>
        <Link 
          to={'/card'} 
          className={`mainbtn  bg-transparent  w-[40px] h-[40px] text-[15px]  duration-[0.3s]  
          transition     font-normal
          ${order.length >0 ? "namber-card" : " "}
          
          `}>
          <i className="fa-solid fa-bag-shopping text-[18px] element-center  relative text-[#ffffff] "></i>
        </Link>
      
      </div>
        
    </header>
  )
}

export default Header
