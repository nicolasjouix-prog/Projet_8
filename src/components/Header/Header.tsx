import Logo from '../../assets/Logo.png'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li><Link to="/">Accueil </Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header