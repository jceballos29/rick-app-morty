import React, { useState } from 'react'

import './css/SearchBox.css'


function SearchBox({getLocation}) {

    const [location, setLocation] = useState('')

    const handleLocation = (event) => {
        setLocation(event.target.value)
    }

    return (
        <div className="SearchBox">
            <input 
                type="text" 
                value={location} 
                onChange={handleLocation}
                placeholder="Insert location name" />
            <button onClick={()=>{
                getLocation(location)
                setLocation('')
            }}>GO!</button>
        </div>
    )
}

export default SearchBox
