import React, { useState , useEffect} from 'react';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from 'react-leaflet'


const FixMapa = (props) => {

    const map = useMap()


    useEffect(() => {
        setTimeout(() => { 
            map.invalidateSize(); 
   
        }, 0); 
    }, [props.activo])
    return (
      <></>
    );
};

export default FixMapa;
