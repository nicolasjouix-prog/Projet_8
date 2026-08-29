import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { Property } from '../../datas/Property'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../pages/Error/Error'
import './Logement.css'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

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
            <div className='presentationLogement'>
                {property && <Slideshow pictures={property.pictures} title={property.title} />}
                <div className='positionLogement'>
                    <div className='leftLogement'>
                        <h2>{property && property.title}</h2>
                        <p>{property && property.location}</p>
                    </div>
                    <div className='rightLogement'>
                        <div className='presentationHote'>
                            <p>{property && property.host.name}</p>
                            {property && <img className='imgHote' src={property.host.picture} />}
                        </div>
                    </div>
                </div>


                <div className="tagsRating">
                    <div className='spaceTags'>
                    {property && property.tags.map((tag) => {
                        return <span className="tag">{tag}</span>
                    })}
                    </div>
                    {property && (
                        <div className='rating'>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index} className="star">
                                    {index < property.rating
                                        ? <img src={starActive} alt="Etoile active" />
                                        : <img src={starInactive} alt="Etoile inactive" />
                                    }
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className='bottomLogement'>
                    <Collapse title="Description">
                        <span className='logementDescription'>{property && property.description}</span>
                    </Collapse>

                    <Collapse title="Equipements">
                        <ul>
                            {property && property.equipments.map((equipment) => (
                                <li>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
    )

}


export default Logement