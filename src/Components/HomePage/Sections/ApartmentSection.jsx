import React from 'react';
import { Card } from 'react-bootstrap';
// import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../../CSS/Sections/ApartmentSec.css";
import { FaEye } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";

// SwiperCore.use([Pagination]);

const ApparttmentSection = () => {

    return (
        <section id='apartments'>
            <div id='apartment_all_content'>
                <div id='view_appartment' >
                    <div className='container' id='appartment_text'>
                        <h1>
                            Explore Apartment Types
                        </h1>
                        <button className='view_apart'>
                            <FaEye size={20} className='icon' />
                            See all categories
                        </button>
                    </div>
                </div>
                <div className='aprt_cards'>
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={50}
                        pagination={{ clickable: true }}    
                    >
                        <SwiperSlide>
                            <Card id='main_aprt_card'>
                                <Card.Body>
                                    <div className='apart_card_content'>
                                        <div id='apart_icon'>
                                            <MdOutlineVilla size={40} className='solo_icon' />
                                        </div>
                                        <div id='apart_name'>
                                            Villa
                                            <div id='propertie_count'>22 Properties</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card id='main_aprt_card'>
                                <Card.Body>
                                    <div className='apart_card_content'>
                                        <div id='apart_icon'>
                                            <MdOutlineVilla size={40} className='solo_icon' />
                                        </div>
                                        <div id='apart_name'>
                                            Villa
                                            <div id='propertie_count'>22 Properties</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card id='main_aprt_card'>
                                <Card.Body>
                                    <div className='apart_card_content'>
                                        <div id='apart_icon'>
                                            <MdOutlineVilla size={40} className='solo_icon' />
                                        </div>
                                        <div id='apart_name'>
                                            Villa
                                            <div id='propertie_count'>22 Properties</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    )
}

export default ApparttmentSection