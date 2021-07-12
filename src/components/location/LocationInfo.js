import React from 'react'

import '../css/LocationInfo.css'

function LocationInfo({location}) {
    return (
        <div className="LocationInfo">
            <h3>{location.name}</h3>
            <div className="information">
                <p><span>Type: </span>{location.type}</p>
                <p><span>Dimension: </span>{location.dimension}</p>
                <p><span>Residents: </span>{location.residents.length}</p>
            </div>
        </div>
    )
}

export default LocationInfo
