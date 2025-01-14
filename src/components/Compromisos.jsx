import React from 'react'
import Mapa from './Mapa';
import { useEffect, useState } from 'react';
import Filtros from './Filtros';
import TarjetasCompromisos from './TarjetasCompromisos';
import InfoHome from './InfoHome';
import BotonesEjes from './BotonesEjes';
import {Row, Col, Tabs, Tab} from 'react-bootstrap'

const URL = import.meta.env.VITE_API_URL

const Compromisos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [compromisos, setCompromisos] = useState([]);
    const [compromisosPorAnio, setCompromisosPorAnio] = useState([]);

    useEffect(() => {
        fetch(`${URL}/compromisos`)
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

    const [checkedIndexEje, setCheckedIndexEje] = useState(null);
    const [ejeElegido, setEjeElegido] = useState(null)
   
    return (
        <div>
            <InfoHome />
           
            <Row>
                
                <BotonesEjes setCheckedIndexEje={setCheckedIndexEje}  checkedIndexEje={checkedIndexEje} setEjeElegido={setEjeElegido}/>


            </Row>
            <Row>
                <p></p>
                    <Col></Col>
                    <Col><hr></hr></Col>
                    <Col></Col>
                </Row>
            <p></p>
            <div>
            {/* <TarjetasCompromisos compromisos={compromisosFiltrados} selectedAnio={selectedAnio} /> */}

                <Tabs
                    defaultActiveKey={1}
                    style={{borderBlock:"aliceblue"}}
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


            <Filtros compromisos={compromisosPorAnio} handleCompromisos={setCompromisosFiltrados} setSelectedAnio={handleAnioChange} ejeElegido={ejeElegido}/>




        </div>
    )
}

export default Compromisos