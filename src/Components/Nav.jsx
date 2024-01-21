
import { useState } from 'react'
import { Link } from 'react-router-dom';



import '../style/header.css'
function Nav() {

  
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
  {name:<>
    <div className='main-menu'>
      <span>Menu</span>
      <i className="  ml-[2px]  inline-block text-[13px]  fa-solid fa-chevron-down"></i>
    </div>
    <ul className='menu-container '>
      <li>
        <Link  to={'/menu'}>Coffe</Link>
      </li>
      <li>
        <Link  to="/appetizers">appetizers</Link>
      </li>
    </ul>
  </> },
  {name:'Contact us ' , to: '/contact',icon:<i className="fa-regular fa-user"></i>},
  {name:'About Us ' , to: '/about',icon:<i className="fa-regular fa-user"></i>},
  ]
  return (
    <nav className=' flex   items-center  '>
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
  )
}

export default Nav
