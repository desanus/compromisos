import React, { useState } from 'react'
import imagen from '../img/logo.png'
import completo from '../img/yes.png'
import ModalCompromiso from './ModalCompromiso'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'


const Tarjeta = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = (e) => {
        setShow(true)
    };

    const [icono, setIcono] = useState(imagen)

    const calcularPorcentaje = () => {
        let sumaPeso = 0;
        props.compromiso.etapas && props.compromiso.etapas.forEach(etapa => {
            if (etapa.completo === 1) {
                sumaPeso += etapa.peso;
            }
        });
        return sumaPeso
    }
    useEffect(() => {
        if (props.compromiso.iconos[0].iconoA) {
            setIcono(`https://sigem.lanus.gob.ar/compromisos/iconos/${props.compromiso.iconos[0].iconoA}`)
        }

    }, []);

    


    return (
        <>

            <motion.div className='compromiso'
                key={props.compromiso.idCompromiso}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                layout>
                <Row style={{ marginBottom: "20px" }}>
                    <div onClick={handleShow}>
                        <div className="contenedor-imagenes" >
                            <img src={icono} alt={props.compromiso.titulo} className='tarjetas-img' />
                            {(calcularPorcentaje() === 100) ?
                                <img className="imagen-superpuesta" src={completo} alt="Imagen superpuesta" /> : <></>
                            }
                        </div>


                    </div>
                </Row>

                <Row>
                    <Col className='columna'>
                        <p>{props.compromiso.titulo}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='columna'>
                        <p>{calcularPorcentaje()}%</p>

                    </Col>


                </Row>
            </motion.div >
            <ModalCompromiso show={show} handleclose={handleClose} porcentaje={calcularPorcentaje()} compromiso={props.compromiso} anio={props.selectedAnio} />

        </>

    )
}

export default Tarjeta