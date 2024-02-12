import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carrousel from './Carrousel';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Checklist from './Checklist';



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

    useEffect(() => {
        fetch(`https://sigem.lanus.gob.ar:8989/api/compromiso/${compromisoId}`)
            .then(response => response.json())
            .then(data => { setCompromiso(data.compromiso[0]) }
            )
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <>
            <ProgressBar now={calcularPorcentaje(compromiso)} visuallyHidden striped style={{ height: "3px" }} />
            <p></p>
            <Container className='compromiso'>
                <Row>

                    <Col>
                        <h1 className='titulo'>{compromiso && compromiso.titulo}</h1>
                    </Col>


                </Row>
                <Row>
                    <Col>
                        <h1>
                            {(compromiso.plazo) ? <Badge bg="secondary">{obtenerPlazo(compromiso.plazo)}</Badge> : <></>}

                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h1>
                            <Badge bg="success">{calcularPorcentaje(compromiso && compromiso)}%</Badge>
                        </h1>
                    </Col>
                </Row>
                <Row className='descripcion'>
                    <Col>
                        {(compromiso.descripcion) ?
                            <p>{eliminarContenidoHTML(compromiso && compromiso.descripcion)}</p> : <></>}

                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><hr></hr></Col>
                    <Col></Col>
                </Row>
                <Row className='diagnostico'>
                    <Col>
                        {(compromiso.descripcion) ?
                            <p>{eliminarContenidoHTML(compromiso.diagnostico)}</p> : <></>}

                    </Col>
                </Row>
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

                <Row>
                    {(compromiso.etapas) ? <Checklist etapas={compromiso.etapas} /> : <></>}

                </Row>

                <Row>
                    <Col></Col>
                    <Col><hr></hr></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='columna'>
                        {compromiso.areas && compromiso.areas.map((area,index) => {
                            return <span key={index} className="bagde-area">{area.nombre}</span>

                        })}

                    </Col>
                </Row>
                <Row style={{ marginTop: "4px" }}>
                    <Col className='columna'>
                        {compromiso.ejes && compromiso.ejes.map((eje,index) => {
                            return <span key={index} className="bagde-area">{eje.nombre}</span>

                        })}

                    </Col>
                </Row>

            </Container>


        </>

    )
}

export default Compromiso