import React from 'react'
import { Card } from 'react-bootstrap'

const InfoHome = () => {
    return (
        <Card className="info-home">

            <Card.Body>
                <h1>¿Qué son los compromisos de Gestión?</h1>
                <h2 style={{fontSize:"18px"}}>En nuestra visión de una gestión municipal abierta y transparente, reconocemos la importancia de mantener las puertas de nuestro gobierno abiertas a la comunidad. Creemos firmemente en la rendición de cuentas, la auditoría y el seguimiento constante de nuestras acciones como pilares fundamentales de una administración responsable.</h2>
                <h2 style={{fontSize:"18px"}}>
                    Es por eso que hemos establecido un mecanismo para asumir compromisos de gestión frente a nuestra comunidad. Estos compromisos no son simples promesas vacías, sino metas cuantificables, medibles y auditables, con plazos específicos e indicadores de cumplimiento claros.

                </h2>
                <h2 style={{fontSize:"18px"}}>

                    Además, este enfoque nos permite trabajar internamente en fortalecer una gestión integrada y coordinada. Adoptamos una mirada transversal que abarca todas las áreas de gobierno, basada en el análisis de datos para la toma de decisiones y el monitoreo constante del avance de los compromisos asumidos.
                </h2>
            </Card.Body>

        </Card>
    )
}

export default InfoHome