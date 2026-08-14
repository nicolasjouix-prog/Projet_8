import './Card.css'

interface CardProps { title: string, cover: string }

function Card({ title, cover }: CardProps) {
    return (
        <article className='carte-galerie'>
            <img className='carte-img' src={cover} alt={title} />
            <h2 className='carte-title'>{title}</h2>
        </article>
    )
}

export default Card