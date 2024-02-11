import React, { useState } from 'react'
import imagen from '../img/logo.png'
import completo from '../img/yes.png'
import ModalCompromiso from './ModalCompromiso'
import { motion } from 'framer-motion'


const Tarjeta = (props) => {
    const redImageData = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMAAAAAICAYAAAHYYMBpAAAAWElEQVR42mJ89+f5/AwAmBgCQEDF/8LAAAAAElFTkSuQmCC";
    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false)
    };
    const handleShow = (e) => {
        setShow(true)
    };

    
    const calcularPorcentaje = () =>{
        let sumaPeso = 0;
        props.compromiso.etapas && props.compromiso.etapas.forEach(etapa => {
            if (etapa.completo === 1) {
            sumaPeso += etapa.peso;
            }
        });
        return sumaPeso
    }


    return (
        <motion.div className='compromiso'
            key={props.compromiso.idCompromiso}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            layout

        >
            <div onClick={handleShow}>
                <div className="contenedor-imagenes" >
                    <img src={imagen} alt="Red Image" className='tarjetas-img' />
                    {(props.compromiso.porcentaje === 100) ?
                        <img className="imagen-superpuesta" src={completo} alt="Imagen superpuesta" /> : <></>
                    }
                </div>

                <div className="detalle">
                    <p>{props.compromiso.titulo}</p>
                </div>
                <div className="detalle" >
                    <p>{calcularPorcentaje()}%</p>
                </div>
            </div>
            <ModalCompromiso show={show} handleclose={handleClose} porcentaje={calcularPorcentaje()} compromiso={props.compromiso} anio={props.selectedAnio} />

        </motion.div >
    )
}

export default Tarjeta