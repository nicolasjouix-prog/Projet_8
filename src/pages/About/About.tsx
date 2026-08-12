import Banner from '../../components/Banner/Banner'
import imageAbout from '../../assets/imageAbout.png'
import Collapse from '../../components/Collapse/Collapse'

function About() {
    return (
        <div>
            <Banner image={imageAbout} />
            <ul>
                <Collapse
                    title="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Collapse
                    title="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse
                    title="Service"
                    description="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                />
                <Collapse
                    title="Sécurité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisations également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </ul >
        </div>

    )
}

export default About