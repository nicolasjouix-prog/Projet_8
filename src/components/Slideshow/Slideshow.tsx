import { useState, useEffect } from 'react'
import './Slideshow.css'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'

interface PicturesProps { pictures: string[], title: string }

function Slideshow({ pictures, title }: PicturesProps) {
    const [slideshow, setSlideshow] = useState(0)
    console.log(slideshow)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            console.log(`Touche pressée : ${e.key}`);
            if (e.key === 'ArrowLeft') {
                setSlideshow(current => current === 0 ? pictures.length - 1 : current - 1)
            }
            if (e.key === 'ArrowRight') {
                setSlideshow(current => current === pictures.length - 1 ? 0 : current + 1)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => { window.removeEventListener('keydown', handleKeyDown) }
    }, [])

    return (
        <div className='carrousel'>
            <button className='buttonCarrouselLeft' onClick={() => setSlideshow(current => current === 0 ? pictures.length - 1 : current - 1)}>
                <img src={arrowBack} alt="Image précédente du carrousel" />
            </button>
            <img className='imgCarrousel' src={pictures[slideshow]} alt={title} />
            <button className='buttonCarrouselRight' onClick={() => setSlideshow(current => current === pictures.length - 1 ? 0 : current + 1)}>
                <img src={arrowForward} alt="Image suivante du carrousel" />
            </button>
        </div>
    )
}

export default Slideshow