import React from 'react'

import './css/LocationContainer.css'

import Imagen from './location/Imagen'
import LocationInfo from './location/LocationInfo'

function LocationContainer({location}) {

    const renderLocation = () => {
        if(location){
            return (
                <>
                    <Imagen />
                    <LocationInfo location={location}/>
                    {/* TODO: ResidentContainer - ResidentInfo */}
                </>
            )
        }
    }


    return (
        <div className="LocationContainer">
            {
                renderLocation()
            }
        </div>
    )
}

export default LocationContainer
