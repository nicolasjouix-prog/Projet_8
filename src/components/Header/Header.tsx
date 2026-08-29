import Logo from '../../assets/Logo.png'
import {NavLink} from 'react-router-dom'
import './Header.css'
import './Header-Responsive.css'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul className='ulHeader'>
                    <li><NavLink to="/">Accueil </NavLink></li>
                    <li><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header