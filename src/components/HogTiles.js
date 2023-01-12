import { useState } from 'react'
import Details from './Details'

function HogTiles({ name, specialty, greased, weight, image, hma }) {
    
    const [detailsVisible, setDetailsVisible] = useState(false)

    const detailsHandler = () => {
        setDetailsVisible(!detailsVisible)
    }

    const details = { specialty, greased, weight, hma }
    return (
        <div key={name} className="pigTile" onClick={detailsHandler}>
            <h3>{name}</h3>
            <img src={image} />
            {detailsVisible ? <Details hog={details} /> : null}
        </div>
    )
}

export default HogTiles