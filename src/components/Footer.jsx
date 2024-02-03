import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logoFooter from '../img/logo-footer.svg'
const Footer = () => {
    return (
        <>
        <footer className="footer">

            <div className="informacion">
                
                <div className="primera col">
                    <div className="logo">
                        <a href="https://www.lanus.gob.ar/" target="_blank">
                            <img title="Lanús Municipio" src={logoFooter} />
                        </a>
                    </div>
                    <div className="info">

                        <span>Av. Hipólito Yrigoyen 3863 - Lanús Oeste</span><br></br>
                        <span>0800-333-5268 (lanus) / WhatsApp: 11 5914 7826</span><br></br>

                    </div>
                </div>
                <div className="centro col">
                    <a href="#" className="destacado">Institucional</a>
                    <a href="https://www.lanus.gob.ar/fichas/63-municipio-de-lanus" target="_blank">Municipio de
                        Lanús</a>
                    <a href="https://www.lanus.gob.ar/fichas/62-intendente" target="_blank">Intendente</a>
                    <a href="https://www.lanus.gob.ar/noticias" target="_blank">Noticias </a>
                </div>
                <div className="centro col">
                    <a href="https://www.lanus.gob.ar/agenda" target="_blank" className="destacado">Actividades</a>
                    <a href="https://www.lanus.gob.ar/noticias" target="_blank" className="destacado">Noticias</a>
                    <span className="destacado">Redes</span>
                    <a href="https://www.facebook.com/LanusMunicipio" target="_blank">Facebook</a>
                    <a href="https://www.instagram.com/lanusmunicipio/" target="_blank">Instagram</a>
                    <a href="https://twitter.com/lanusmunicipio" target="_blank">Twitter</a>
                    <a href="https://www.youtube.com/channel/UCrrwJJxGnbXv0fxcEXJ8XBQ" target="_blank">Youtube</a>
                </div>
                <div className="centro col">
                    <span className="destacado">Trámites y servicios</span>

                   
                    <a href="https://consultaweb.lanus.gob.ar/consultadeuda" target="_blank">Consultá tu deuda</a>
                    <a href="https://ddjj.lanus.gob.ar" target="_blank">Tasa de seguridad e higiene</a>
                    <a href="https://www.lanus.gob.ar/calendarioimpositivo" target="_blank">Calendario Impositivo</a>
                    <a href="https://www.lanus.gob.ar/tramites-y-servicios/2-licencia-de-conducir"
                        target="_blank">Licencia de conducir</a>
                    <a href="https://tramitesweb.lanus.gob.ar" target="_blank">INFRACCIONES DE TRÁNSITO</a>
                    <a href="https://www.lanus.gob.ar/tramites-y-servicios/7-clave-fiscal" target="_blank">Clave
                        Fiscal</a>
                    <a href="https://proveedores.lanus.gob.ar/Proveedores" target="_blank">PROVEEDORES</a>
                </div>

                <div className="ultima col">
                    <h2>Teléfonos Útiles</h2>
                    <p>
                        Bomberos: 100 <br></br>
                        Policía: 911 <br></br>
                        Emergencia Médica: 107 <br></br>
                        Defensa Civil: 103 <br></br>
                        Seguridad Ciudadana: 132 <br></br>
                    </p>
                </div>
            </div>

            <div className="iconos">
                <div className="icono"><a href="https://www.facebook.com/LanusMunicipio" target="_blank">
                    {/* <img src="{{ url('img/layout/facebook-footer.svg') }}"> */}
                </a>
                </div>
                <div className="icono"><a href="https://twitter.com/lanusmunicipio" target="_blank">
                    {/* <img src="{{ url('img/layout/twitter-footer.svg') }}"> */}
                </a>
                </div>
                <div className="icono"><a href="https://www.youtube.com/channel/UCrrwJJxGnbXv0fxcEXJ8XBQ"
                    target="_blank">
                    {/* <img src="{{ url('img/layout/youtube-footer.svg') }}"> */}
                </a>
                </div>
                <div className="icono"><a href="https://www.instagram.com/lanusmunicipio/" target="_blank">
                    {/* <img src="{{ url('img/layout/instagram-footer.svg') }}"> */}
                </a>
                </div>
            </div>
        
    </footer >
    </>

                    )
}

export default Footer