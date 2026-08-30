import { useState } from 'react'
import arrowCollapse from '../../assets/arrowCollapse.png'
import type { ReactNode } from 'react'
import './Collapse.css'

interface collapseProps {
    title: string,
    children: ReactNode
}

function Collapse({ title, children }: collapseProps) {
    const [collapse, setCollapse] = useState(false)
    return (
        <div>
            <li className={`listCollapse ${collapse ? 'open' : ''}`}>
                <div className={`bannerCollapse ${collapse ? 'open' : ''}`}>
                    {title}
                    <img className={`arrowIcon ${collapse ? 'open' : ''}`} src={arrowCollapse} alt={title} onClick={() => setCollapse(!collapse)} />
                </div >
                <div className={`collapseContent ${collapse ? 'open' : ''}`}>{children}</div>
            </li>
        </div>
    )
}

export default Collapse