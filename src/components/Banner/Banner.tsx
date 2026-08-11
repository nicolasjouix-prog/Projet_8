import imageBanner from '../../assets/imageBanner.png'

function Banner() {
    return (
        <div>
        <img src={imageBanner} alt="Chez vous, partout et ailleurs" />
        <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner