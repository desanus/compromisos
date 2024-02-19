import React from 'react'
import Mapa from './Mapa';
import { useEffect, useState } from 'react';
import Filtros from './Filtros';
import TarjetasCompromisos from './TarjetasCompromisos';
import InfoHome from './InfoHome';
import { Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Compromisos = () => {


    const [compromisos, setCompromisos] = useState([]);
    const [compromisosPorAnio, setCompromisosPorAnio] = useState([]);

    useEffect(() => {
        fetch('https://sigem.lanus.gob.ar:8989/api/compromisos')
            .then(response => response.json())
            .then(data => {
                setCompromisos(data.compromisos)
                setCompromisosPorAnio(data.compromisos)
            }
            )
            .catch(error => console.error('Error fetching data:', error));
    }, []);



    const [compromisosFiltrados, setCompromisosFiltrados] = useState(null)
    const [selectedAnio, setSelectedAnio] = useState(2024)
    const [mapaActivo, setMapaActivo] = useState(false)
    console.log(mapaActivo)

    const handleAnioChange = (selectedAnio) => {
        setSelectedAnio(selectedAnio)
        if (selectedAnio === 0) {
            // Si el valor seleccionado es 0, mostrar todos los compromisos
            setCompromisosPorAnio(compromisos);
        } else {
            // Filtrar compromisos por el año presente en alguna de sus etapas
            const comp = compromisos.filter((compromiso) => {
                return compromiso.etapas && compromiso.etapas.some((etapa) => etapa.anio === selectedAnio);
            });

            // Actualizar el estado de compromisos con el resultado del filtro por año
            setCompromisosPorAnio(comp);
        }

    }


    return (
        <div>
            <InfoHome />
            <p></p>
            <Row>
                <Col></Col>
                <Col><hr></hr></Col>
                <Col></Col>
            </Row>

            <Filtros compromisos={compromisosPorAnio} handleCompromisos={setCompromisosFiltrados} setSelectedAnio={handleAnioChange} />
            <p></p>
            <div>

                <Tabs
                    defaultActiveKey={1}
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    onSelect={() => { setMapaActivo(true) }}
                >
                    <Tab eventKey={1} title="Compromisos">
                        <TarjetasCompromisos compromisos={compromisosFiltrados} selectedAnio={selectedAnio} />

                    </Tab>
                    <Tab eventKey={2} title="Mapa" >
                        <div >

                            <Mapa compromisos={compromisosFiltrados} showmapa={mapaActivo} />

                        </div>

                    </Tab>

                </Tabs>

            </div>



        </div>
    )
}

export default Compromisos