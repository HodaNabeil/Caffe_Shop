
import '../all.min.css'
import {Link} from 'react-router-dom'
import '../style/header.css'
import Logo from './Logo';
import Nav from './Nav';
function Header() {

  return (
    <header className="header">
      <Logo/>
      <Nav/>
      <Link to={'/card'} className=' mainbtn hover:text-[#220100]'>Coffee shopp</Link>
        
    </header>
  )
}

export default Header
