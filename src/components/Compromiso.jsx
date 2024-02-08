import React from 'react'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carrousel from './Carrousel';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Checklist from './Checklist';

const Compromiso = () => {
    const { compromisoId } = useParams();
    const { anio } = useParams();

    // useEffect(() => {

    //     /*consultar en base de datos el compromiso por año*/ 
    // }, [])

    return (
        <>
            <ProgressBar now={30} visuallyHidden striped style={{ height: "3px" }} />
            <p></p>
            <Container className='compromiso'>
                <Row>

                    <Col>
                        <h1 className='titulo'>Título</h1>
                    </Col>


                </Row>
                <Row>
                    <Col>
                        <h1>
                            <Badge bg="secondary">A corto plazo</Badge>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h1>
                            <Badge bg="success">30%</Badge>
                        </h1>
                    </Col>
                </Row>
                <Row className='descripcion'>
                    <Col>
                        <p>Descripcion : Lorem ipsum,distinctio ex. Eligendi!</p>

                    </Col>
                </Row>
                <Row className='diagnostico'>
                    <Col>
                        <p>Diagnostico: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem animi, eaque
                            maxime saepe odio maiores tempora consequuntur, consectetur in, doloremque dolorem quis at et cupiditate accusantium. Quibusdam, distinctio ex. Eligendi!</p>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><hr></hr></Col>
                    <Col></Col>
                </Row>
                <Carrousel />
                <Row>
                    <Col></Col>
                    <Col><hr></hr></Col>
                    <Col></Col>
                </Row>
                <Row>

                    <Col>
                        <h1 className='titulo-metas'>Metas</h1>
                    </Col>


                </Row>
                <Row>
                    <Checklist/>
                </Row>
            </Container>

            <div>Compromiso {compromisoId}</div>
            <div>Compromiso {anio}</div>
        </>

    )
}

export default Compromiso