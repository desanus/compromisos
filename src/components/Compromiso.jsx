import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carrousel from './Carrousel';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Checklist from './Checklist';
import Placeholder from 'react-bootstrap/Placeholder';



const calcularPorcentaje = (compromiso) => {

    let sumaPeso = 0;
    compromiso.etapas && compromiso.etapas.forEach(etapa => {
        if (etapa.completo === 1) {
            sumaPeso += etapa.peso;
        }
    });
    return sumaPeso
}

function eliminarContenidoHTML(texto) {
    return texto.replace(/<[^>]+>/g, '');
}


const Compromiso = () => {
    const { compromisoId } = useParams();
    const { anio } = useParams();

    const [compromiso, setCompromiso] = useState([]);

    const obtenerPlazo = (plazo) => {
        switch (plazo) {
            case '1':
                return 'A corto plazo'
                break;
            case '2':
                return 'A mediano plazo'
                break;
            case '3':
                return 'A largo plazo'
                break;
            default:
                break;
        }
    }
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://sigem.lanus.gob.ar:8989/api/compromiso/${compromisoId}`)
            .then(response => response.json())
            .then(data => {
                setCompromiso(data.compromiso[0])
                setLoading(false)
            }
            )
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <ProgressBar now={calcularPorcentaje(compromiso)} visuallyHidden style={{ height: "3px" }} />
            <p></p>
            <Container className='compromiso'>



                <Row>
                    <Col md={8}>

                    </Col>

                    <Col className='columna'>

                        <Row>
                            <Col className='columna'>
                                {compromiso.areas && compromiso.areas.map((area, index) => {
                                    return <span key={index} className="bagde-area">{area.nombre}</span>

                                })}

                            </Col>
                        </Row>
                        <Row >
                            <Col className='columna'>
                                {compromiso.ejes && compromiso.ejes.map((eje, index) => {
                                    return <span key={index} className="bagde-area">{eje.nombre}</span>

                                })}

                            </Col>
                        </Row>
                    </Col>

                </Row>


                <Row>
                    <Col md={8}>
                        {(loading) ?

                            <Col>
                                <Placeholder as="p" animation="glow" className="glow">
                                    <Placeholder md={4} />
                                </Placeholder>
                            </Col>
                            :
                            <Col>
                                <h1 className='titulo'>{compromiso && compromiso.titulo}</h1>
                                <h1 className='titulo' style={{ marginTop: "50px", fontSize:"28px" }}> ¿De qué se trata este compromiso? </h1>
                            </Col>


                        }
                    </Col>

                </Row>

                <Row>
                    {(loading) ?
                        <Col>
                            <Placeholder as="p" animation="glow" className="glow">
                                <Placeholder md={1} />
                            </Placeholder>
                        </Col>


                        :
                        <Col>
                            <h1>
                                {(compromiso.plazo) ? <Badge bg="secondary">{obtenerPlazo(compromiso.plazo)}</Badge> : <></>}

                            </h1>
                        </Col>


                    }
                </Row>

                {(loading) ?

                    <Row>
                        <Placeholder as="p" animation="glow" className="glow">
                            <Placeholder md={1} />
                        </Placeholder>
                    </Row>

                    :
                    <Row>
                        <Col >
                            <h1>
                                <Badge bg="success">{calcularPorcentaje(compromiso && compromiso)}%</Badge>
                            </h1>
                        </Col>
                    </Row>
                }

                <Row className='descripcion'>

                    {(loading) ?
                        <Col>
                            <Placeholder as="p" animation="glow" className="glow">
                                <Placeholder size="lg" md={12} style={{ height: "200px", with: "auto" }} />
                            </Placeholder>
                        </Col>

                        :
                        <Col>
                            {(compromiso.descripcion) ?
                                <p>{eliminarContenidoHTML(compromiso && compromiso.descripcion)}</p> : <></>}

                        </Col>
                    }
                </Row>




                <Row>
                    <h1 className='titulo' style={{ marginTop: "50px", fontSize:"28px" }}> ¿Por qué lo asumimos? </h1>
                </Row>
                <Row className='diagnostico'>

                    {(loading) ?
                        <Col>
                            <Placeholder as="p" animation="glow" className="glow">
                                <Placeholder size="lg" md={12} style={{ height: "200px", with: "auto" }} />
                            </Placeholder>
                        </Col>

                        :
                        <Col>
                            {(compromiso.descripcion) ?
                                <p>{eliminarContenidoHTML(compromiso.diagnostico)}</p> : <></>}

                        </Col>
                    }


                </Row>

                        {/* INDICADORES */}
                {/* {(compromiso.graficos) ?
                    <Row style={{ marginTop: "20px", marginBottom: "30px" }}>
                        <Col>

                            {(loading) ?

                                <Col>
                                    <Placeholder as="p" animation="glow" className="glow">
                                        <Placeholder md={4} />
                                    </Placeholder>
                                </Col>
                                :
                                <Col>
                                    <Row style={{ marginBottom: "30px" }}>
                                        <h1 className='titulo'>AGREGAR ALGUN TITULO</h1>

                                    </Row>
                                    <Row>

                                        {compromiso.graficos.map((grafico) => {
                                            return <Col className='columna'> <img style={{ width: "auto", height: "40vh" }} src={`https://sigem.lanus.gob.ar/compromisos/graficos/${grafico.grafico}`}></img></Col>
                                        })}
                                    </Row>
                                </Col>


                            }
                        </Col>
                    </Row>
                    :
                    <></>} */}
                <Row>
                    <br></br>
                    <br></br>
                    <br></br>
                </Row>
                {(compromiso.fotos) ?
                    <Carrousel fotos={compromiso.fotos} /> : <></>
                }

                <Row>
                    <br></br>
                    <br></br>
                    <br></br>
                </Row>
                <Row>

                    <Col>
                        <h1 className='titulo-metas'>Metas</h1>
                    </Col>


                </Row>

                <Row style={{ fontSize: "20px" }}>
                    {(compromiso.etapas) ? <Checklist etapas={compromiso.etapas} /> : <></>}

                </Row>

                <Row>
                    <Col></Col>
                    <Col><hr></hr></Col>
                    <Col></Col>
                </Row>



            </Container>


        </>

    )
}

export default Compromiso