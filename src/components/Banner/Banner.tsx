interface BannerProps {
    image: string,
    text?: string
}

function Banner({ image, text }: BannerProps) {
    return (
        <div>
            <img src={image} alt={text} />
            {text && <p>{text}</p>}
        </div>
    )
}

export default Banner