import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const ExploradorCompromisos = (props) => {
    const [checkedIndex, setCheckedIndex] = useState(null);

    const botones = [
        { nombre: 'categoria 1', id: 1 },
        { nombre: 'categoria 2', id: 2 },
        { nombre: 'categoria 3', id: 3 },
        { nombre: 'categoria 4', id: 4 },
        { nombre: 'categoria 5', id: 5 },
        { nombre: 'categoria 6', id: 6 },
        { nombre: 'categoria 7', id: 7 }
    ];

   

    const [compromisosFiltrados, setCompromisosFiltrados] = useState(null)

    const handleButtonClick = (index) => {
        setCheckedIndex(index === checkedIndex ? null : index);

        const comp = props.compromisos.filter((compromiso) => {
            return compromiso.tipo && compromiso.tipo.some((tipo) => tipo.categoria === index);
        });
        props.handleCompromisos(comp)

    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Explorador de compromisos</Card.Title>
                    <Card.Text>
                        Filtrar por área
                    </Card.Text>
                    <Row>
                        <Col className="columna-filtro">
                            {botones.map((boton) => (
                                <Badge
                                    key={boton.id}
                                    bg={boton.id === checkedIndex ? "success" : "primary"}
                                    className="boton-hover"
                                    onClick={() => handleButtonClick(boton.id)}
                                >
                                    {boton.nombre}
                                </Badge>
                            ))}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default ExploradorCompromisos;
