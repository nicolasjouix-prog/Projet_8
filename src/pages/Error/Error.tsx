import {Link} from 'react-router-dom'
import './Error.css'
import './Error-Responsive.css'

function Error() {
    return (
        <div>
            <h2 className='titleError'>404</h2>
            <p className='textError'>Oups! La page que vous demandez n'existe pas</p>

            <Link className='linkError' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error