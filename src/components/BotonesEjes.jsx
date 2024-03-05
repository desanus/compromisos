import React, { useState, useEffect } from 'react'
import imagen from '../img/logo.png'
import { Row, Col, Card } from 'react-bootstrap'

const BotonesConImagen = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index === hoveredIndex ? null : index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


    const handleButtonEjes = (index) => {
        props.setCheckedIndexEje(index === props.checkedIndexEje ? null : index);
        props.setEjeElegido(index === props.checkedIndexEje ? null : index)
    };

    // const [checkedIndexEje, setCheckedIndexEje] = useState(null);
    // const [ejeElegido, setEjeElegido] = useState(null)

    const [ejes, setEjes] = useState([]);

    // const aplicarFiltros = () => {

    //     let compromisosFiltrados = props.compromisos

    //     if (ejeElegido !== null) {
    //         compromisosFiltrados = filtrarEjes(compromisosFiltrados)
    //     }
    //     return compromisosFiltrados;


    // }

    // const filtrarEjes = (filtrar) => {

    //     const comp = filtrar.filter((compromiso) => {
    //         return compromiso.ejes && compromiso.ejes.some((eje) => eje.idEje === ejeElegido);
    //     });
    //     return comp
    // }

    // useEffect(() => {
    //     props.handleCompromisos(aplicarFiltros())

    // }, [ejeElegido])


    useEffect(() => {
        fetch('https://sigem.lanus.gob.ar:8989/api/ejes')
            .then(response => response.json())
            .then(data => setEjes(data.ejes))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Card style={{border:"none"}}>
            <Card.Body >

                <Row className='columna'>
                    {ejes && ejes.map((eje, index) => (

                        <Col xs={6} md={1}
                            key={eje.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}

                            style={{ transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)', 
                            marginTop: "20px", marginBottom: "20px", marginRight: "0px", cursor: "pointer" }}
                            onClick={() => handleButtonEjes(eje.id)}
                        >

                            <div className="botones-eje-compromiso" >
                                <img src={(eje.icon) ? `https://compromisos.lanus.gob.ar/${eje.icon}` : imagen} alt={`Imagen ${index}`}
                                    style={{ width: '130px', height: "auto" }}
                                />
                            </div>

                            <div style={{ textAlign: 'center' }} >
                                {/* Contenedor para ambos h4 */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "10px" }}>
                                    {/* {eje.nombre.split(" ").map((word, i) => (
                                <h1 className='titulo' key={i} style={{margin:"0",  color:"white"}}>{word}</h1>
                            ))} */}
                                    <h1 className='titulo' style={{ margin: "0", color:"#5f272c" }}>{eje.nombre}</h1>

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
