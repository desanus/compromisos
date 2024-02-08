import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { Row, Col } from 'react-bootstrap'
const Checklist = () => {
    const [items, setItems] = useState([
        { id: 1, text: ' Lorem ipsun Lorem ipsu Lorem ipsu', completed: true },
        { id: 2, text: ' Lorem ipsu Lorem ipsu 2', completed: true },
        { id: 3, text: ' Lorem ipsu Lorem ipsu Lorem ipsu Lorem ipsu 3', completed: false },
    ]);



    return (
        <ul>
            {items.map(item => (
                <li key={item.id} style={{ fontSize: "20px", }} >
                    {item.completed ? (
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />
                    ) : (
                        <FontAwesomeIcon icon={faCircle} style={{ color: 'gray' }} />
                    )}
                    {item.text}
                    <p></p>
                </li>
            ))}
        </ul>
    );
};

export default Checklist;
