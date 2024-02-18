import React from 'react'
import Modal from 'react-bootstrap/Modal';
import imagen from '../img/logo.png'
import { Row, Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom";
import Checklist from './Checklist';


const ModalCompromiso = (props) => {
    const cerrarModal = () => {
        props.handleclose();
    }
    const now = props.porcentaje;
    function eliminarContenidoHTML(texto) {
        return texto.replace(/<[^>]+>/g, '');
    }

    const obtenerIcono = () => {

        return (props.compromiso.iconos) ? 'https://sigem.lanus.gob.ar/compromisos/iconos/' + props.compromiso.iconos[0].iconoA : imagen

    }

    function limitarTexto(texto, limite) {
        if (texto.length <= limite) {
            return texto;
        } else {
            // Buscar el último espacio dentro del límite especificado
            const ultimoEspacio = texto.lastIndexOf(' ', limite);
            if (ultimoEspacio === -1) {
                return texto.substring(0, limite) + "...";
            } else {
                return texto.substring(0, ultimoEspacio) + " ...";
            }
        }
    }
    return (
        <Modal show={props.show} onHide={() => { cerrarModal() }} className="modal-info" size="xl" centered>

            <Modal.Body style={{ margin: "30px" }}>
                <Row>
                    <Col>
                        <Row style={{ marginTop: "20px" }}>
                            <Col className='columna' md={4}>
                                <img src={obtenerIcono()} className="img" />
                            </Col>
                            <Col>
                                <Row>
                                    <div className='modal-info'>
                                        <h1 className='titulo'>{props.compromiso.titulo}</h1>
                                        <h1 className='texto'>{limitarTexto(eliminarContenidoHTML(props.compromiso.descripcion), 300)}</h1>
                                    </div>
                                </Row>
                                <Row>
                                    <label style={{ fontSize: "20px" }}>ESTADO DEL COMPROMISO:</label>

                                    <Row>
                                        {(props.compromiso.etapas) ? <Checklist etapas={props.compromiso.etapas} /> : <></>}

                                    </Row>
                                </Row>


                            </Col>
                        </Row>

                        <Row >
                          
                            <Col>
                            <br></br>
                            <label style={{ fontSize: "20px" }}>Cumplido:</label>
                                <ProgressBar className='progress-bar' variant={(now === 100) ? "success" : "primary"} now={now} label={`${now}%`} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='botones-modal'>
                                <button variant="primary" className='button' >
                                    <Link to={`/compromiso/${props.compromiso.idCompromiso}/anio/${props.anio}`} className="volver">Ver más sobre el compromiso</Link>
                                </button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Modal.Body>

        </Modal>

    )
}

export default ModalCompromiso

