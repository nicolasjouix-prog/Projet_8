import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { Property } from '../../datas/Property'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../pages/Error/Error'

function Logement() {
    const { id } = useParams()
    const [property, setProperty] = useState<Property | null>(null) // useState est null (null) et peut contenir Property ou null
    useEffect(() => {
        const fetchProperty = async () => {
            const response = await fetch("http://localhost:8080/api/properties")
            const data: Property[] = await response.json();
            const propertyFound = data.find((property) => (property.id === id))
            setProperty(propertyFound ?? null)
        }
        fetchProperty();
    }, []);



    return (
        property === null ? <Error /> :
        <div>
            {property && <Slideshow pictures={property.pictures} title={property.title} />}
            {property && property.title}
            {property && property.location}
            {property && property.tags.map((tag) => { return tag })}
            {property && property.host.name}
            {property && <img src={property.host.picture} />}
            {property && property.rating}

            <Collapse title="Description">
                <p>{property && property.description}
                </p>
            </Collapse>

            <Collapse title="Equipements">
                <ul>
                    {property && property.equipments.map((equipment) => (
                        <li>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    )

}


export default Logement