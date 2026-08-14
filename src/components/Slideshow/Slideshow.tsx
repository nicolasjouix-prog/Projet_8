import { useState, useEffect } from 'react'

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
        return() => {window.removeEventListener('keydown', handleKeyDown)}        
    }, [])



    return (
        <div>

            <button onClick={() => setSlideshow(current => current === 0 ? pictures.length - 1 : current - 1)}></button>
            <img src={pictures[slideshow]} alt={title} />
            <button onClick={() => setSlideshow(current => current === pictures.length - 1 ? 0 : current + 1)}></button>
            

        </div>
    )
}

export default Slideshow