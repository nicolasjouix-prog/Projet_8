import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { Property } from '../../datas/Property'
import Slideshow from '../../components/Slideshow/Slideshow'

function Logement() {
    const { id } = useParams()
    const [property, setProperty] = useState<Property | null>(null)
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
        <div>
            {property && <Slideshow pictures={property.pictures} title={property.title} />} 
            {property && property.title}
            {property && property.location}
            {property && property.tags.map((tag) => { return tag })}
            {property && property.host.name}
            {property && property.host.picture}
            {property && property.rating}
            {property && property.description}
            {property && property.equipments.map((equipment) => { return equipment })}


        </div>
    )

}


export default Logement