import React from 'react'


const NavbarLanus = () => {
    return (

        <header>
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

                    </div>
                </div>
            </div>

            <div className="inferior">
                <a className="logo" href="/"></a>



                <div className="menu">
                    <a className="desplegar desplegar-menu" tabIndex={0}><span></span><span></span><span></span></a>
                    <nav uawraparea="1" wrapareatype="menu">
                        <ul className="contenido" role="menubar">
                            <li>
                                <a href="https://www.lanus.gob.ar/fichas/5285-lanus-digital" target="_blank" data-andiallelmwithtext="13" mainchilds="0" role="menuitem">LANÚS DIGITAL</a>
                            </li>
                            <li>
                                <a href="https://www.lanus.gob.ar/municipiodelanus" target="" data-andiallelmwithtext="13" mainchilds="1" role="menuitem">MUNICIPIO</a>
                            </li>
                            <li>
                                <a href="https://www.lanus.gob.ar/fichas/62-intendente-julian-alvarez" target="" data-andiallelmwithtext="13" mainchilds="2" role="menuitem">INTENDENTE</a>
                            </li>
                            <li>
                                <a href="https://www.lanus.gob.ar/noticias" target="" data-andiallelmwithtext="13" mainchilds="3" role="menuitem">NOTICIAS</a>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default NavbarLanus