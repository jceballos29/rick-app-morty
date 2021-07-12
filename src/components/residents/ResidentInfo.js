import React, { useState, useEffect } from 'react'

import '../css/ResidentInfo.css'
import {getDataApi} from '../../services/getDataApi'
 
function ResidentInfo({url}) {

    const [resident, setResident] = useState(null)

    // const Resident = ({resident}) => {
    //     return (
    //         <div className="Resident">
    //             <h4>{resident.name}</h4>
    //             <p>{resident.status} - {resident.species}</p>
    //             <p><span>Origin: </span>{resident.origin}</p>
    //             <p><span>Episodes: </span>{resident.episode}</p>
    //         </div>
    //     )
    // }

    useEffect(() => {
        if(url){
            const getResident = async () => {
                setResident(await getDataApi(url))
            }
            getResident();
        }
    }, [url])

    return (
        <div className="ResidentInfo">
            {resident ? 
            <div className="Resident">
                <img width="40%" src={resident.image} alt={resident.name}/>
                <h4>{resident.name}</h4>
                <p>{resident.status} - {resident.species}</p>
                <p><span>Origin: </span>{resident.origin.name}</p>
                <p><span>Episodes: </span>{resident.episode.length}</p>
            </div> 
                : 'cargando'
            }
        </div>
    )
}

export default ResidentInfo
