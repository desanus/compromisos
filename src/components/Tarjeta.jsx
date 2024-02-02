import React from 'react'
import imagen from '../img/logo.png'
import { motion } from 'framer-motion'


const Tarjeta = (props) => {
    const redImageData = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMAAAAAICAYAAAHYYMBpAAAAWElEQVR42mJ89+f5/AwAmBgCQEDF/8LAAAAAElFTkSuQmCC";

    return (
        <motion.div
            animate={{ opacity: 1 }}
            inital={{ opacity: 0 }}
            exit={{ opacity: 1 }}
          
            layout >
            <h1>{props.nombre}</h1>
            <img src={imagen} alt="Red Image" className='tarjetas-img' />
        </motion.div>
    )
}

export default Tarjeta