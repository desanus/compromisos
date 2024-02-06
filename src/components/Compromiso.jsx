import React from 'react'
import { useParams } from 'react-router-dom'
const Compromiso = () => {
    const { compromisoId } = useParams();
    const { anio } = useParams();

    return (
        <>
        
        <div>Compromiso {compromisoId}</div>
        <div>Compromiso {anio}</div>
        </>

    )
}

export default Compromiso