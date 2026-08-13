import { useState } from 'react'
import arrowCollapse from '../../assets/arrowCollapse.png'
import type { ReactNode } from 'react'

interface collapseProps {
    title: string,
    children: ReactNode
}

function Collapse({ title, children }: collapseProps) {
    const [collapse, setCollapse] = useState(false)
    return (
        <li>
            <button onClick={() => setCollapse(!collapse)}>
                {title}
                <img src={arrowCollapse} alt={title} />
            </button >
            {collapse && children}
        </li>
    )
}

export default Collapse