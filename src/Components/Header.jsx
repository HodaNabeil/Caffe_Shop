
import '../all.min.css'
import {Link, NavLink} from 'react-router-dom'
import '../style/header.css'
import { useState } from 'react'
function Header() {

  const [mobile ,setMobile] = useState(false);
  const [navOpen , setNavOpen] =useState(false);
  const [activeLinkes , setActiveLinks] = useState("Home");

  function hundleActiveLiks (link) {
    setActiveLinks(link);
  
  }

  function Toggle() {
    setMobile((isopen)=> !isopen);
    setNavOpen((navOpen) => !navOpen)
  }
  const links =[
  {name:'Home' ,to:'/' ,icon:  <i className="fa-solid fa-house"></i>},
  {name:'CoffeMenu' ,to:'/menu' , icon: <i className="fa-solid fa-cart-shopping"></i>},
  {name:'Contact us ' , to: '/contact',icon:<i className="fa-regular fa-user"></i>},
  {name:'About Us ' , to: '/about',icon:<i className="fa-regular fa-user"></i>},
  ]
  return (
    <header className="header">
        <Link 
          to={'/'}
          className='logo'>
          <h4>Flavored <span><i className="fa-solid fa-mug-saucer"></i> </span></h4>
          <span>wake up to something special  </span>
        </Link>
        <nav>
          <ul className={`nav-links ${navOpen ===true ? 'nav-links ' :' nav-links show '}`}>
              {
                links.map((link ,index) => {
                return(
                <li key={index} onClick={ ()=> hundleActiveLiks(link.name)}   >
                  <Link to={link.to} 
                    className= {` nav-link ${activeLinkes === link.name ? 'active' : ' '}`}>
                    <span className='mobile-icon-nav'>{link.icon}</span>
                    {link.name} 
                  </Link>
                </li>
                ) 
                })
              }
          </ul>
          <div   onClick={Toggle}>
            <i className={`mobile-icon fa-solid ${mobile ?  '  fa-bars':' fa-xmark' }`}></i>
          </div>
        </nav>
        <button className=' mainbtn'>Coffee shopp</button>
        
    </header>
  )
}

export default Header
