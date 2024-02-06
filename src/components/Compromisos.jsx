import React from 'react'
import { useState } from 'react';
import Filtros from './Filtros';
import TarjetasCompromisos from './TarjetasCompromisos';
import InfoHome from './InfoHome';
import ModalCompromiso from './ModalCompromiso';

const Compromisos = () => {

    const [compromisos, setCompromisos] = useState(
        [
            { id: 1, nombre: "compromiso1", porcentaje: 10, localidad: 4, anio: 2024, plazo: 1, ejes: [{ eje: 1 }, { eje: 3 }], areas: [{ area: 1 }, { area: 2 }, { area: 3 }] },
            { id: 2, nombre: "calles", porcentaje: 20, localidad: 4, anio: 2024, plazo: 2, ejes: [{ eje: 1 }], areas: [{ area: 1 }, { area: 4 }, { area: 5 }] },
            { id: 3, nombre: "edificios", porcentaje: 30, localidad: 2, anio: 2024, plazo: 3, ejes: [{ eje: 3 }, { eje: 2 }], areas: [{ area: 1 }, { area: 6 }, { area: 7 }] },
            { id: 4, nombre: "salud", porcentaje: 40, localidad: 3, anio: 2025, plazo: 3, ejes: [{ eje: 1 }, { eje: 2 }], areas: [{ area: 1 }, { area: 8 }, { area: 3 }] },
            { id: 5, nombre: "compromiso5", porcentaje: 50, localidad: 1, anio: 2024, plazo: 2, ejes: [{ eje: 2 }], areas: [{ area: 1 }, { area: 4 }, { area: 3 }] },
            { id: 6, nombre: "seguridad", porcentaje: 60, localidad: 2, anio: 2027, plazo: 3, ejes: [{ eje: 3 }], areas: [{ area: 1 }, { area: 4 }, { area: 3 }] },
            { id: 7, nombre: "espacio verde", porcentaje: 100, localidad: 3, anio: 2026, plazo: 1, ejes: [{ eje: 1 }, { eje: 2 }, { eje: 3 }], areas: [{ area: 1 }, { area: 6 }, { area: 5 }] },
            { id: 8, nombre: "plazas", porcentaje: 100, localidad: 2, anio: 2026, plazo: 1, ejes: [{ eje: 1 }, { eje: 2 }, { eje: 3 }, { eje: 4 }], areas: [{ area: 1 }, { area: 6 }, { area: 5 }] }
        ])

    const [compromisosFiltrados, setCompromisosFiltrados] = useState(null)
    const [selectedAnio, setSelectedAnio] = useState(null)
    console.log(selectedAnio)
    return (
        <div>
            <InfoHome />
            <p></p>
            <Filtros compromisos={compromisos} handleCompromisos={setCompromisosFiltrados} setSelectedAnio={setSelectedAnio}/>
            <p></p>
            <TarjetasCompromisos compromisos={compromisosFiltrados} selectedAnio={selectedAnio}/>
          
        </div>
    )
}

export default Compromisos