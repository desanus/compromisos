import React from 'react'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Compromiso = () => {
    const { compromisoId } = useParams();
    const { anio } = useParams();

    // useEffect(() => {
   
    //     /*consultar en base de datos el compromiso por año*/ 
    // }, [])
    

    return (
        <>
        <ProgressBar now={98} visuallyHidden striped style={{height:"3px"}}/>

        <div>Compromiso {compromisoId}</div>
        <div>Compromiso {anio}</div>
        </>

    )
}

export default Compromiso