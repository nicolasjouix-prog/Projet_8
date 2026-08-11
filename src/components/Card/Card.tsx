interface CardProps { title: string, cover: string }

function Card({ title, cover }: CardProps) {
    return (
        <article>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </article>
    )
}

export default Card