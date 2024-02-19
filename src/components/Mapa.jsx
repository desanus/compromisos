import React, { useEffect, useRef } from "react";
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import FixMapa from "./FixMapa";




const Mapa = (props) => {
 
     const lanus = [-34.7015147, -58.4024018]
 
   

    return (
        <MapContainer  center={lanus} zoom={13} scrollWheelZoom={true} attributionControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FixMapa activo={props.showmapa}/>
            {props.compromisos && props.compromisos.map((compromiso) => {
                return (
                    compromiso.ubicaciones && compromiso.ubicaciones.map((ubicacion, index) => { // Agregar el índice como segundo parámetro
                        return (
                            <Marker position={[ubicacion.latitud, ubicacion.longitud]} key={index}>
                                <Popup>
                                    <div>
                                        <Row>
                                            <Col>
                                                {compromiso.titulo}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Link to={`/compromiso/${compromiso.idCompromiso}/anio/${compromiso.anio}`} className="volver">Ver más sobre el compromiso</Link>
                                            </Col>
                                        </Row>
                                    </div> </Popup>

                            </Marker>
                        );
                    })
                )
            })}


        </MapContainer>
    );
}

export default Mapa;
