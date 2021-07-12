
import React, { useState, useEffect } from 'react'


import './css/ResidentContainer.css'

import ResidentInfo from './residents/ResidentInfo'


function ResidentContainer({residents}) {

    const [listResidents,setListResidents] = useState([])

    useEffect(() => {
        if (residents) {
            setListResidents(residents.map((resident,index) => {
               return <ResidentInfo key={index} url={resident}/>
            }))
        }
    }, [residents])

    return (
        <div className="ResidentContainer">
            {
            listResidents
            }
        </div>
    )
}

export default ResidentContainer
