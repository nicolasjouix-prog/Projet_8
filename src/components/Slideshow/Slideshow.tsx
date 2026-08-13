import { useState, useEffect } from 'react'

interface PicturesProps { pictures: string[], title: string }

function Slideshow({ pictures, title }: PicturesProps) {
    const [slideshow, setSlideshow] = useState(0)

    return (
        <div>
            
            <button onClick={() => setSlideshow(slideshow === 0 ? pictures.length - 1 : slideshow - 1 )}></button>
            <img src={pictures[slideshow]} alt={title} />     
            <button onClick={() => setSlideshow(slideshow === pictures.length -1 ?  0 : slideshow + 1 )}></button>
        </div>
    )
}

export default Slideshow