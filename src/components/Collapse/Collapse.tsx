import { useState } from 'react'
import arrowCollapse from '../../assets/arrowCollapse.png'

interface collapseProps {
    title: string,
    description: string,
}

function Collapse({ title, description }: collapseProps) {
    const [collapse, setCollapse] = useState(false)
    return (
        <li>
            <button onClick={() => setCollapse(!collapse)}>
                {title}
                <img src={arrowCollapse} alt={title} />

            </button >
            {collapse && description}
        </li>
    )
}

export default Collapse