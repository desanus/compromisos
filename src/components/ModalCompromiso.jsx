import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imagen from '../img/logo.png'
import { Row, Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useRouteError, Link } from "react-router-dom";


const ModalCompromiso = (props) => {
    const cerrarModal = () => {
        props.handleclose();
    }
    const now = 60;
  

    return (
        <Modal show={props.show} onHide={() => { cerrarModal() }} className="modal-info">
            <Modal.Header closeButton>
                <Modal.Title>{props.compromiso.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img src={imagen} className="img" />
                    </Col>
                    <Col>
                        <div className='info'>
                            <h1 className='titulo'>Lorem ipsum</h1>
                            <h1 className='texto'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum...</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <label>Cumplido:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                </Row>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { cerrarModal() }}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={cerrarModal}>
                <Link to={`/compromiso/${props.compromiso.id}/anio/${props.anio}`} className="volver">Volver al inicio</Link>
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModalCompromiso

