import React from 'react'
import imagen from '../img/logo.png'
import { motion } from 'framer-motion'


const Tarjeta = (props) => {
    const redImageData = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMAAAAAICAYAAAHYYMBpAAAAWElEQVR42mJ89+f5/AwAmBgCQEDF/8LAAAAAElFTkSuQmCC";

    console.log(props)
    return (
        <motion.div
            key={props.compromiso.id}
            animate={{ opacity: 1 }}
            inital={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            layout >
            {/* <h2>nombre: {props.compromiso.nombre}</h2>
            <h2>porcentaje: {props.compromiso.porcentaje}%</h2>
            <h2>año: {props.compromiso.anio}</h2>
            <h2>Localidad: {props.compromiso.localidad}</h2>
            <h2>Categorias:</h2>
            {props.compromiso.tipo.map((c,index)=>{
                return <h2 key={index}>{c.categoria}</h2>
            })}  */}
            <img src={imagen} alt="Red Image" className='tarjetas-img' />
        </motion.div>
    )
}

export default Tarjeta