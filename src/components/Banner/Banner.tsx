import './Banner.css'

interface BannerProps {
    image: string,
    text?: string
}

function Banner({ image, text }: BannerProps) {
    return (
        <div className='banner'>
            <img className='img-banner' src={image} alt={text} />
            {text && <p>{text}</p>}
        </div>
    )
}

export default Banner