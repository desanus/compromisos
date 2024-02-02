import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ExploradorCompromisos = (props) => {

    const [checkedIndex, setCheckedIndex] = useState(null);

    const botones = [
        { nombre: 'categoria 1', id: 1 },
        { nombre: 'categoria 2', id: 2 },
        { nombre: 'categoria 3', id: 3 },
        { nombre: 'categoria 4', id: 4 },
        { nombre: 'categoria 5', id: 5 },
        { nombre: 'categoria 6', id: 6 },
        { nombre: 'categoria 7', id: 7 }
    ];

    useEffect(() => {
        props.handleCompromisos(props.compromisos)
    }, [])

    const handleButtonClick = (index) => {
        setCheckedIndex(index === checkedIndex ? null : index);

        const comp = props.compromisos.filter((compromiso) => {
            return compromiso.tipo && compromiso.tipo.some((tipo) => tipo.categoria === index);
        });
        props.handleCompromisos(comp)

    };
    const [busqueda, setbusqueda] = useState('');

    const handleInputChange = (event) => {
        const busqueda = event.target.value;
        // Llama a tu función de filtro con el valor actual del input
        buscarPorPalabra(busqueda);
        // Actualiza el estado para guardar el valor del input
        setbusqueda(busqueda);
    };

    const buscarPorPalabra = (busqueda) => {
        // Filtrar compromisos por el campo "nombre"
        const comp = props.compromisos.filter((compromiso) => {
            return compromiso.nombre.toLowerCase().includes(busqueda.toLowerCase());
        });
        props.handleCompromisos(comp);
    };

    const handleAnioChange = (event) => {
        const selectedAnio = parseInt(event.target.value, 10);

        if (selectedAnio === 0) {
            // Si el valor seleccionado es 0, mostrar todos los compromisos
            props.handleCompromisos(props.compromisos);
        } else {
            // Filtrar compromisos por el año seleccionado
            const comp = props.compromisos.filter((compromiso) => {
                return compromiso.anio === selectedAnio;
            });

            // Actualizar el estado de compromisos con el resultado del filtro por año
            props.handleCompromisos(comp);
        }
    };
    const [checkboxValue, setCheckboxValue] = useState('');

    const filtrarPorcentaje = (piso, techo) => {
        console.log(piso, techo)
        const comp = props.compromisos.filter((compromiso) => {
            // Ajusta los números según tus necesidades
            const rangoInicio = piso;
            const rangoFin = techo;

            // Filtra compromisos con porcentaje en el rango especificado
            return compromiso.porcentaje >= rangoInicio && compromiso.porcentaje <= rangoFin;
        });
    }
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        console.log(value)
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
            <Card>
                <Card.Body>
                    <Card.Title>Explorador de compromisos</Card.Title>
                    <Card.Text>
                        Filtrar por área
                    </Card.Text>
                    <Row className='row-filtros'>
                        <Col className="columna-filtro">
                            {botones.map((boton) => (
                                <Badge
                                    key={boton.id}
                                    bg={boton.id === checkedIndex ? "success" : "primary"}
                                    className="boton-hover"
                                    onClick={() => handleButtonClick(boton.id)}
                                >
                                    {boton.nombre}
                                </Badge>
                            ))}
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='input-filter'>Buscar por palabra clave:</Form.Label>
                                    <Form.Control
                                        className='filter-busqueda-input'
                                        type="text"
                                        placeholder="ingresá al menos 3 caracteres"
                                        value={busqueda}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>

                        <Col md={2}>

                            <Form.Group className="mb-3">
                                <Form.Label className='input-filter'>Buscà por año:</Form.Label>
                                <Form.Select onChange={handleAnioChange} className='filter-input-dropdown'>
                                    <option defaultValue={0}>( todos los años )</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>

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
                        </Col>
                        <Col md={3}>

                            <Form.Group className="mb-3">
                                <Form.Label className='input-filter'>Buscar por localidad:</Form.Label>
                                <Form.Select onChange={handleAnioChange} className='filter-input-dropdown'>
                                    <option defaultValue={0}>( todas las localidades )</option>
                                    <option value={1}>Localidad 1</option>
                                    <option value={2}>Localidad 2</option>
                                    <option value={3}>Localidad 3</option>
                                    <option value={4}>Localidad 4</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default ExploradorCompromisos;
