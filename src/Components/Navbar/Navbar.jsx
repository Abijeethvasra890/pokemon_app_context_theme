import React,{ useContext }  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import '../Navbar/Navbar.css'
import { Toggle } from '../Toggle/Toggle'
import themeContext from '../../context/ThemeContext'
import AuthContext from '@/context/AuthContext'
import NameModal from '../NameModal/NameModal'


const Navbar = () => {
  const { isAuthenticated, userName, logout } = useContext(AuthContext);
  const { darkMode } = useContext(themeContext);

  return (
    <div>  
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
          <div className="title">Pokémon App</div>
          <div className='usertext'>{isAuthenticated ? `Hi, ${userName}` : <NameModal />}</div>
          <Toggle />
          <div className='buttonsRight'>
           
            <div >
                <Link className = "nav-item nav-link active" to="/">
                  <Button className="m-2">Home</Button>
                </Link>
                <Link className = "nav-item nav-link" to="/pokemons"> 
                  <Button className="m-2">Pokemon List</Button>
                </Link>
                <Button onClick={logout} className="m-2">Logout</Button>
            </div>
           
          </div>
        </nav>
    </div>
  )
}

export default Navbar