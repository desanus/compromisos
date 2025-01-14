import React, { useState, useEffect } from 'react';
import imagen from '../img/logo.png';
import { Row, Col, Card } from 'react-bootstrap';

const URL = import.meta.env.VITE_API_URL
const BotonesConImagen = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleButtonEjes = (index) => {
        if (activeIndex === index) {
            // If the same button is clicked again, shrink it
            setActiveIndex(null);
            props.setCheckedIndexEje(null);
            props.setEjeElegido(null);
        } else {
            setActiveIndex(index);
            props.setCheckedIndexEje(index);
            props.setEjeElegido(index);
        }
    };

    const [ejes, setEjes] = useState([]);

    useEffect(() => {
        fetch(`${URL}/ejes`)
            .then(response => response.json())
            .then(data => setEjes(data.ejes))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Card style={{ border: "none", backgroundColor: "aliceblue", borderRadius: 20 }}>
            <Card.Body>
                <Row
                    className="columna"
                    style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
                >
                    {ejes && ejes.map((eje, index) => (
                        <Col
                            xs={12} md={1}
                            key={eje.id}
                            onMouseEnter={() => handleMouseEnter(eje.id)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: activeIndex === eje.id ? 'scale(1.1)' : 'scale(1)',
                                marginTop: "20px",
                                marginBottom: "20px",
                                cursor: "pointer",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            onClick={() => handleButtonEjes(eje.id)}
                        >
                            <div className="botones-eje-compromiso">
                                <img
                                    src={(eje.icon) ? `https://compromisos.lanus.gob.ar/${eje.icon}` : imagen}
                                    alt={`Imagen ${eje.id}`}
                                    style={{ width: '130px', height: "auto" }}
                                />
                            </div>

                            <div style={{ textAlign: 'center', maxWidth: '150px' /* Ajusta según sea necesario */ }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "10px" }}>
                                    <h1 className='titulo'>
                                        {eje.nombre}
                                    </h1>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BotonesConImagen;
