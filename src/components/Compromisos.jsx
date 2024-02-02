import React from 'react'
import { useState } from 'react';
import Filtros from './Filtros';
import TarjetasCompromisos from './TarjetasCompromisos';

const Compromisos = () => {

    const [compromisos, setCompromisos] = useState(
        [
            { id: '1', nombre: "compromiso1", porcentaje: 10, tipo: [{ categoria: 1 }, { categoria: 2 }, { categoria: 3 }] },
            { id: '2', nombre: "compromiso2", porcentaje: 20, tipo: [{ categoria: 1 }, { categoria: 4 }, { categoria: 5 }] },
            { id: '3', nombre: "compromiso3", porcentaje: 30, tipo: [{ categoria: 1 }, { categoria: 6 }, { categoria: 7 }] },
            { id: '4', nombre: "compromiso4", porcentaje: 40, tipo: [{ categoria: 1 }, { categoria: 8 }, { categoria: 3 }] },
            { id: '5', nombre: "compromiso5", porcentaje: 50, tipo: [{ categoria: 1 }, { categoria: 4 }, { categoria: 3 }] },
            { id: '6', nombre: "compromiso6", porcentaje: 60, tipo: [{ categoria: 1 }, { categoria: 4 }, { categoria: 3 }] },
            { id: '7', nombre: "compromiso7", porcentaje: 100, tipo: [{ categoria: 1 }, { categoria: 6 }, { categoria: 5 }] },
            { id: '8', nombre: "compromiso8", porcentaje: 100, tipo: [{ categoria: 1 }, { categoria: 6 }, { categoria: 5 }] }
        ])

    const [compromisosFiltrados,setCompromisosFiltrados] = useState(null)

    return (
        <div>

            <Filtros compromisos={compromisos} handleCompromisos={setCompromisosFiltrados} />

            <p></p>
            <TarjetasCompromisos compromisos={compromisosFiltrados} />

        </div>
    )
}

export default Compromisos