import React from 'react'
import { useParams } from 'react-router-dom'
const Compromiso = () => {
    const { compromisoId } = useParams();
    return (
        <div>Compromiso {compromisoId}</div>
    )
}

export default Compromiso