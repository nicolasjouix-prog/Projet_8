import Logo from '../../assets/Logo.png'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header