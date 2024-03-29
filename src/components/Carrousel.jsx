import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Row, Col } from 'react-bootstrap'
// import required modules
import { Pagination } from 'swiper/modules';


const Carrousel = (props) => {

    const imagenes = props.fotos

    return (
        <Row>

            <Col >
                <Swiper spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    initialSlide={0} // Aquí estableces el slide del medio como activo inicialmente
                   // slidesPerView={3}
                    centeredSlides={true} // Centra el slide activo
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination]} className="mySwiper">
                    {imagenes.map((foto, index) => {
                        return (

                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div className={isActive ? 'swiper-slide-active' : 'inactive-slide'}>
                                        <img src={`https://sigem.lanus.gob.ar/compromisos/fotos/${foto.foto}`} />
                                    </div>
                                )}
                            </SwiperSlide>
                        )
                    })}


                </Swiper>
            </Col>
        </Row>
    );
};

export default Carrousel;