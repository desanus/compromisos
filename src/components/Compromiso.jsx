import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carrousel from './Carrousel';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Checklist from './Checklist';
import Placeholder from 'react-bootstrap/Placeholder';
import BotonVolver from './BotonVolver';
import imagen from '../img/logo.png';

const calcularPorcentaje = (compromiso) => {
    let sumaPeso = 0;
    compromiso.etapas && compromiso.etapas.forEach(etapa => {
        if (etapa.completo === 1) {
            sumaPeso += etapa.peso;
        }
    });
    return sumaPeso;
};

const eliminarContenidoHTML = (texto) => {
    return texto.replace(/<[^>]+>/g, '');
};
const URL = import.meta.env.VITE_API_URL

const Compromiso = () => {
    const { compromisoId, anio } = useParams();
    console.log(compromisoId);
    console.log(anio);
    const [compromiso, setCompromiso] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${URL}/compromiso/${compromisoId}`)
            .then(response => response.json())
            .then(data => {
                setCompromiso(data.compromiso[0]);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [compromisoId, anio]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const obtenerPlazo = (plazo) => {
        switch (plazo) {
            case '1':
                return 'A corto plazo';
            case '2':
                return 'A mediano plazo';
            case '3':
                return 'A largo plazo';
            default:
                break;
        }
    };

    return (
        <>
            <ProgressBar now={calcularPorcentaje(compromiso)} visuallyHidden style={{ height: "3px" }} />
            <p></p>
            <Container className='compromiso'>
                <Row>
                    <Col md={12}>
                        {loading ? (
                            <Placeholder as="p" animation="glow" className="glow">
                                <Placeholder md={4} />
                            </Placeholder>
                        ) : (
                            <>
                                <Row >
                                    <Col md={10}>
                                        <h1 className='titulo'>{compromiso && compromiso.titulo}</h1>
                                    </Col>
                                    <Col md={2} >
                                        {compromiso.ejes && compromiso.ejes.map((eje, index) => (
                                            <img key={index} src={(compromiso.ejes.icono) ? `https://sigem.lanus.gob.ar/compromisos/iconos/${compromiso.ejes.icono}` : imagen} alt={eje.nombre} className='icono-eje-compromiso' />
                                        ))}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1}>
                                        <h1>
                                            {compromiso.plazo ? <Badge bg="secondary">{obtenerPlazo(compromiso.plazo)}</Badge> : <></>}
                                        </h1>
                                    </Col>
                                    <Col md={1}>
                                        <h1>
                                            <Badge bg="success">{calcularPorcentaje(compromiso)}% de avance</Badge>
                                        </h1>
                                    </Col>
                                </Row>
                                <h1 className='titulo' style={{ fontSize: "28px", marginTop: "20px" }}>¿De qué se trata este compromiso?</h1>
                            </>
                        )}
                    </Col>
                </Row>
                <Row className='descripcion'>
                    {loading ? (
                        <Col>
                            <Placeholder as="p" animation="glow" className="glow">
                                <Placeholder size="lg" md={12} style={{ height: "200px", with: "auto" }} />
                            </Placeholder>
                        </Col>
                    ) : (
                        <Col>
                            {compromiso.descripcion ? <p>{eliminarContenidoHTML(compromiso.descripcion)}</p> : <></>}
                        </Col>
                    )}
                </Row>
                <Row>
                    <h1 className='titulo' style={{ marginTop: "10px", fontSize: "28px" }}>¿Por qué lo asumimos?</h1>
                </Row>
                <Row className='diagnostico'>
                    {loading ? (
                        <Col>
                            <Placeholder as="p" animation="glow" className="glow">
                                <Placeholder size="lg" md={12} style={{ height: "200px", with: "auto" }} />
                            </Placeholder>
                        </Col>
                    ) : (
                        <Col>
                            {compromiso.diagnostico ? <p>{eliminarContenidoHTML(compromiso.diagnostico)}</p> : <></>}
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col>
                        {compromiso.fotos ? <Carrousel fotos={compromiso.fotos} /> : <></>}
                    </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                    <Col>
                        {compromiso.etapas ? <h1 className='titulo' style={{ fontSize: "28px" }}>Etapas del compromiso</h1> : <></>}
                    </Col>
                </Row>
                <Row style={{ fontSize: "20px" }}>
                    {compromiso.etapas ? <Checklist etapas={compromiso.etapas} /> : <></>}
                </Row>
                <Row>
                    <Col className="columna">
                        <BotonVolver />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><hr /></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};  

export default Compromiso;
