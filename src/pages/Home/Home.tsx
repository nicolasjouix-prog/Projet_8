import Banner from '../../components/Banner/Banner'
import imageHome from '../../assets/imageHome.png'
import { useState, useEffect } from 'react'
import type { Property } from '../../datas/Property'
import Card from '../../components/Card/Card'

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

            <div>
                {properties.map(({ id, title, cover }) => (
                    <Card
                        key={id} //* besoin d'une key unique pour chaque élément
                        title={title}
                        cover={cover}
                    />
                ))}
            </div>
        </main>
    )
}


    export default Home