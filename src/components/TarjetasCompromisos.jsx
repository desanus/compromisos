import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap'
import Tarjeta from './Tarjeta'
import { motion, AnimatePresence } from 'framer-motion'

const TarjetasCompromisos = (props) => {
    console.log(props.compromisos)
    return (
            <>
                <Card>
                    <Card.Body>
                        <motion.div layout className="tarjetas-compromisos">
                            <AnimatePresence>
                                {props.compromisos && props.compromisos.map((compromiso,index) => {
                                    return <Tarjeta key={index} compromiso={compromiso} />
                                })}
                            </AnimatePresence>
                        </motion.div>
                    </Card.Body>
                </Card>


            </>
    )
}

export default TarjetasCompromisos