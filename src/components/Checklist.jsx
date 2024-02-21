import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap'
const Checklist = (props) => {

    const etapasOrdenadas = props.etapas.sort((a, b) => a.etapa - b.etapa);
    console.log(etapasOrdenadas)

    return (
        <ul>
            {etapasOrdenadas.map(item => (
                <li key={item.id} >
                    <div >
                     
                    {item.completo === 1 ? (
                        <>  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> {item.etapa} - {item.detalle}</>
                       
                    ) : (
                        <>  <FontAwesomeIcon icon={faCircle} style={{ color: 'gray' }} /> {item.etapa} - {item.detalle} </>
                      
                    )}
                    
                   
                    </div>
                 
                </li>
            ))}
        </ul>
    );
};

export default Checklist;
