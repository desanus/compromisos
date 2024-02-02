import React from 'react'

const Navbar = () => {
    return (
        <div className="superior">
            <div className="contenido">
                <div className="info">
                    <ul>
                        <li className="ubicacion">Av. Hipólito Yrigoyen 3863 - Lanús Oeste</li>
                        <li className="telefono"><a href="tel:08003335268">0800-333-5268 (lanus)</a></li>                 
                    </ul>
                </div>
                <div className="derecha">
                  
                    <div className="col">
                        <a href="https://tramitesweb.lanus.gob.ar/" target="_blank"><strong>Lanús
                            Digital</strong></a>
                    </div>
                    <div className="col redes">
                        <a href="https://www.facebook.com/LanusMunicipio" target="_blank" className="facebook"></a>
                        <a href="https://twitter.com/lanusmunicipio" target="_blank" className="twitter"></a>
                        <a href="https://www.instagram.com/lanusmunicipio/" target="_blank" className="instagram"></a>
                    </div>
                    <div className="col">
                        <div className="clima"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar