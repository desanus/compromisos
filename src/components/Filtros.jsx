import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';

const ExploradorCompromisos = (props) => {

    const [checkedIndex, setCheckedIndex] = useState(null);
    const [checkedIndexEje, setCheckedIndexEje] = useState(null);
    const [areaElegida, setAreaElegida] = useState(null)
    const [ejeElegido, setEjeElegido] = useState(null)
    const [compromisos, setCompromisos] = useState(null)
    const [plazoElegido, setPlazoElegido] = useState(null)
    const [palabraElegida, setPalabraElegida] = useState('');


    const [botones, setBotones] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState('');

    useEffect(() => {
        fetch('https://sigem.lanus.gob.ar:8989/api/areas')
            .then(response => response.json())
            .then(data => setBotones(data.areas))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [ejes, setEjes] = useState([]);

    useEffect(() => {
        fetch('https://sigem.lanus.gob.ar:8989/api/ejes')
            .then(response => response.json())
            .then(data => setEjes(data.ejes))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    useEffect(() => {
        setCompromisos(props.compromisos)
        props.handleCompromisos(aplicarFiltros())
    }, [props.compromisos])


    const aplicarFiltros = () => {

        let compromisosFiltrados = props.compromisos
        if (areaElegida !== null) {
            compromisosFiltrados = filtrarArea(compromisosFiltrados)
        }
        if (ejeElegido !== null) {
            compromisosFiltrados = filtrarEjes(compromisosFiltrados)
        }
        if (plazoElegido !== null) {
            compromisosFiltrados = filtrarPlazo(compromisosFiltrados)
        }
        if (palabraElegida !== '') {
            compromisosFiltrados = filtrarPalabra(compromisosFiltrados)
        }
        return compromisosFiltrados;


    }


    const filtrarArea = (filtrar) => {

        const comp = filtrar.filter((compromiso) => {
            return compromiso.areas && compromiso.areas.some((area) => area.idArea === areaElegida);
        });
        return comp
    }

    const filtrarEjes = (filtrar) => {

        const comp = filtrar.filter((compromiso) => {
            return compromiso.ejes && compromiso.ejes.some((eje) => eje.idEje === ejeElegido);
        });
        return comp
    }

    const filtrarPlazo = (filtrar) => {
        const comp = filtrar.filter((compromiso) => {
            return parseInt(compromiso.plazo) === plazoElegido;
        });
        return comp
    }

    useEffect(() => {

        props.handleCompromisos(aplicarFiltros())
    }, [areaElegida])

    useEffect(() => {
        props.handleCompromisos(aplicarFiltros())

    }, [ejeElegido])

    useEffect(() => {

        setCheckedIndexEje(props.ejeElegido === checkedIndexEje ? null : props.ejeElegido);
        setEjeElegido(props.ejeElegido === checkedIndexEje ? null : props.ejeElegido)
 
    }, [props.ejeElegido])


    useEffect(() => {

        props.handleCompromisos(aplicarFiltros())
    }, [plazoElegido])

    useEffect(() => {

        props.handleCompromisos(aplicarFiltros())
    }, [palabraElegida])


    const handleButtonClick = (index) => {
        setAreaElegida(index === checkedIndex ? null : index)
        setCheckedIndex(index === checkedIndex ? null : index);
    };


    const handleButtonEjes = (index) => {
        setCheckedIndexEje(index === checkedIndexEje ? null : index);
        setEjeElegido(index === checkedIndexEje ? null : index)
    };

    const handlePlazoChange = (event) => {
        let plazo = parseInt(event.target.value, 10)
        setPlazoElegido(plazo === 0 ? null : plazo)

    };

    const handleInputChange = (event) => {
        const busqueda = event.target.value;
        setPalabraElegida(busqueda === palabraElegida ? '' : busqueda);
    };


    const filtrarPalabra = (filtrar) => {
        if (palabraElegida.length > 2) {


            const comp = filtrar.filter((compromiso) => {
                // Filtrar compromisos que contengan la palabraBuscada en sus tags
                return compromiso.tags.some(tag => tag.tag.includes(palabraElegida));
            }).reduce((result, compromiso) => {
                // Utilizar reduce para devolver solo un resultado por idCompromiso
                if (!result.some(comp => comp.idCompromiso === compromiso.idCompromiso)) {
                    result.push(compromiso);
                }
                return result;
            }, []);
            return comp;
        } else {
            return filtrar
        }
    }


    const handleAnioChange = (event) => {
        const selectedAnio = parseInt(event.target.value, 10);
        props.setSelectedAnio(selectedAnio);
    };

    const filtrarPorcentaje = (piso, techo) => {

        const comp = props.compromisos.filter((compromiso) => {
            // Ajusta los números según tus necesidades
            const rangoInicio = piso;
            const rangoFin = techo;

            // Filtra compromisos con porcentaje en el rango especificado
            return compromiso.porcentaje >= rangoInicio && compromiso.porcentaje <= rangoFin;
        });
        return comp;
    }

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        // Si la checkbox seleccionada es la misma que ya estaba seleccionada, deselecciónala
        if (checkboxValue === value) {
            setCheckboxValue('');
            props.handleCompromisos(props.compromisos)
        } else {
            // Si es una checkbox diferente, actualiza el estado con el nuevo valor
            setCheckboxValue(value);

            switch (value) {
                case '1': // 0 a 25
                    props.handleCompromisos(filtrarPorcentaje(0, 25))
                    break;
                case '2': //26 a 50

                    props.handleCompromisos(filtrarPorcentaje(26, 50))
                    break;
                case '3': //51 a 75 

                    props.handleCompromisos(filtrarPorcentaje(51, 75))
                    break;
                case '4': //75 a 100

                    props.handleCompromisos(filtrarPorcentaje(75, 100))
                    break;
            }
        }
    };

    return (
        <>
            <Card style={{ border: "none", backgroundColor:"aliceblue" }} >
                <Card.Body>
                    {/* <Card.Title style={{ fontSize: "30px" }}>Explorador de compromisos</Card.Title>
                    <Card.Title ><p>Elegí el año y buscá los compromisos por área, eje temático ó bien podés buscar por palabra clave.</p></Card.Title>
                   */}
                    {/* 
                    <Row className='row-filtros'>
                        <label style={{ marginBottom: "10px" }}> Filtrá por área:</label>
                        <Col className="columna-filtro">
                            {botones && botones.map((boton) => (
                                <span
                                    key={boton.id}
                                    className={`boton-hover bagde-area ${boton.id === checkedIndex ? "seleccionado" : ""}`}
                                    onClick={() => handleButtonClick(boton.id)}
                                >
                                    {boton.nombre}
                                </span>
                            ))}
                        </Col>
                    </Row> */}
                    <Row className='row-filtros'>
                        <label style={{ marginBottom: "10px" }}> Filtrá por eje temático</label>


                        {ejes && ejes.map((eje) => (
                            <Col className="contenedor-botones" xs={6} md={2}  key={eje.id}>
                                <span
                                   

                                    className={`boton-hover bagde-area ${eje.id === checkedIndexEje ? "seleccionado" : ""}`}

                                    onClick={() => handleButtonEjes(eje.id)}
                                >
                                    {eje.nombre}
                                </span>
                            </Col>
                        ))}

                    </Row>

                    <Row>

                        <Col md={2} xs={6}>

                            <Form.Group className="mb-4">
                                <Form.Label className='input-filter'>Buscá por año:</Form.Label>
                                <Form.Select onChange={handleAnioChange} className='filter-input-dropdown' defaultValue={0}>
                                    <option value={0}>Todos los años</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={2} xs={6}>

                            <Form.Group className="mb-3">
                                <Form.Label className='input-filter'>Buscá por plazo:</Form.Label>
                                <Form.Select onChange={handlePlazoChange} className='filter-input-dropdown' defaultValue={0}>
                                    <option value={0}> Todos</option>
                                    <option value={1}>Corto plazo</option>
                                    <option value={2}>Mediano plazo</option>
                                    <option value={3}>Largo plazo</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={8} xs={12}>
                            <Form >
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label className='input-filter'>Buscar por palabra clave:</Form.Label>
                                    <Form.Control
                                        className='filter-busqueda-input'
                                        type="text"
                                        placeholder="ingresá al menos 3 caracteres"
                                        value={palabraElegida}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>


                        {/* <Col md={4}>

                            <label className='input-filter'>
                                Buscar por avance:
                            </label>
                            <Form>
                                <Form.Group className="mb-3 filter-radio-buttons" controlId="formBasicCheckbox" >
                                    <Form.Check
                                        type="checkbox"
                                        label="0-25%"
                                        name="checkboxGroup"
                                        value="1"
                                        checked={checkboxValue === '1'}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="26-50%"
                                        name="checkboxGroup"
                                        value="2"
                                        checked={checkboxValue === '2'}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="51-75%"
                                        name="checkboxGroup"
                                        value="3"
                                        checked={checkboxValue === '3'}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="76-100%"
                                        name="checkboxGroup"
                                        value="4"
                                        checked={checkboxValue === '4'}
                                        onChange={handleCheckboxChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Col> */}

                        {/* POR AHORA NO VAMOS A HACER FILTROS POR LOCALIDAD */}
                        {/* <Col md={3}>

                            <Form.Group className="mb-3">
                                <Form.Label className='input-filter'>Buscar por localidad:</Form.Label>
                                <Form.Select onChange={handleLocalidadChange} className='filter-input-dropdown' defaultValue={0}>
                                    <option value={0}>( todos las localidades )</option>
                                    <option value={1}>Localidad 1</option>
                                    <option value={2}>Localidad 2</option>
                                    <option value={3}>Localidad 3</option>
                                    <option value={4}>Localidad 4</option>
                                </Form.Select>
                            </Form.Group>
                        </Col> */}
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default ExploradorCompromisos;
