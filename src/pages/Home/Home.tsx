import Banner from '../../components/Banner/Banner'
import imageHome from '../../assets/imageHome.png'
import { useState, useEffect } from 'react'
import type { Property } from '../../datas/Property'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

    const [properties, setProperties] = useState<Property[]>([]) //* properties est un tableau de Property, initialisé avec un tableau vide

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await fetch("http://localhost:8080/api/properties")
            const data = await response.json();
            setProperties(data);
        }
        fetchProperties();
    }, []); //* exécute cet effet au montage du composant


    return (
        <main>
            <div>
                <Banner image={imageHome} text="Chez vous, partout et ailleurs" />
            </div>

            <div className='galerie'>
                {properties.map(({ id, title, cover }) => (
                    <Link className='lien-galerie' to={`/Logement/${id}`}>
                    <Card
                        key={id} //* besoin d'une key unique pour chaque élément
                        title={title}
                        cover={cover}
                    />
                    </Link>
                ))}
            </div>
        </main>
    )
}


    export default Home