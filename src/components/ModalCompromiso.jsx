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
    const now = props.compromiso.porcentaje;

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
                        <div className='modal-info'>
                            <h1 className='titulo'>Lorem ipsum</h1>
                            <h1 className='texto'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum...</h1>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <label style={{fontSize:"20px"}}>Cumplido:</label>
                    <Col>
                        <ProgressBar variant={(now === 100) ? "success" : "primary"} now={now} label={`${now}%`} />
                    </Col>
                </Row>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { cerrarModal() }}>
                    Cerrar
                </Button>
                <Button variant="primary" >
                    <Link to={`/compromiso/${props.compromiso.id}/anio/${props.anio}`} className="volver">Ver más</Link>
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModalCompromiso

