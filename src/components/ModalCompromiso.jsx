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
    const now = props.porcentaje;
    function eliminarContenidoHTML(texto) {
        return texto.replace(/<[^>]+>/g, '');
    }

    console.log(props.compromiso.iconos && props.compromiso.iconos[0].iconoA)
    const obtenerIcono = () => {

        return (props.compromiso.iconos) ? 'http://sigem.lanus.gob.ar/compromisos/iconos/' + props.compromiso.iconos[0].iconoA : imagen

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
        <Modal show={props.show} onHide={() => { cerrarModal() }} className="modal-info" size="lg" centered>

            <Modal.Body style={{ margin: "30px" }}>
                <Row style={{ marginTop: "20px" }}>
                    <Col className='columna'>
                        <img src={obtenerIcono()} className="img" />
                    </Col>
                    <Col>
                        <div className='modal-info'>
                            <h1 className='titulo'>{props.compromiso.titulo}</h1>
                            <h1 className='texto'>{limitarTexto(eliminarContenidoHTML(props.compromiso.descripcion),300)}</h1>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <br></br>
                    <label style={{ fontSize: "20px" }}>Cumplido:</label>
                    <Col>
                        <ProgressBar variant={(now === 100) ? "success" : "primary"} now={now} label={`${now}%`} />
                    </Col>
                </Row>

                <Row>
                    <Col className='botones-modal'>

                        <button variant="secondary" className='button-cerrar' onClick={() => { cerrarModal() }}>
                            Cerrar
                        </button>
                        <button variant="primary" className='button' >
                            <Link to={`/compromiso/${props.compromiso.idCompromiso}/anio/${props.anio}`} className="volver">Ver más</Link>
                        </button>
                    </Col>

                </Row>
            </Modal.Body>

        </Modal>

    )
}

export default ModalCompromiso

