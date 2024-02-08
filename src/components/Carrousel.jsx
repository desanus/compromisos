import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Row, Col } from 'react-bootstrap'
// import required modules
import { Pagination } from 'swiper/modules';
const Carrousel = () => {

    return (
        <Row>
            <br></br>
            <br></br>

            <Col>
                <Swiper spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    initialSlide={1} // Aquí estableces el slide del medio como activo inicialmente
                    slidesPerView={3}
                    centeredSlides={true} // Centra el slide activo
                    modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={isActive ? 'swiper-slide-active' : 'inactive-slide'}>
                                Current slide is {isActive ? 'active' : 'not active'}
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={isActive ? 'swiper-slide-active' : 'inactive-slide'}>
                                Current slide is {isActive ? 'active' : 'not active'}
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={isActive ? 'swiper-slide-active' : 'inactive-slide'}>
                                Current slide is {isActive ? 'active' : 'not active'}
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={isActive ? 'swiper-slide-active' : 'inactive-slide'}>
                                Current slide is {isActive ? 'active' : 'not active'}
                            </div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className={isActive ? 'swiper-slide-active' : 'inactive-slide'}>
                                Current slide is {isActive ? 'active' : 'not active'}
                            </div>
                        )}
                    </SwiperSlide>
                </Swiper>
            </Col>
        </Row>
    );
};

export default Carrousel;