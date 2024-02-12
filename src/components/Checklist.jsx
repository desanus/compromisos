import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap'
const Checklist = (props) => {

   

    return (
        <ul>
            {props.etapas.map(item => (
                <li key={item.id} style={{ fontSize: "20px", }} >
                    <div style={{marginTop:"10px"}}>
                     
                    {item.completo === 1 ? (
                        <>  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> {item.detalle}</>
                       
                    ) : (
                        <>  <FontAwesomeIcon icon={faCircle} style={{ color: 'gray' }} /> {item.detalle} </>
                      
                    )}
                    
                   
                    </div>
                 
                </li>
            ))}
        </ul>
    );
};

export default Checklist;
