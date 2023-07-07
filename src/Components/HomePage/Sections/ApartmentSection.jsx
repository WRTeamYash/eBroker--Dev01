import React from 'react';
import { Card } from 'react-bootstrap';
import "../../../CSS/Sections/ApartmentSec.css";
import { FaEye } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const ApparttmentSection = () => {
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
        outline: 1px solid #000;
        font-size: 20px;
        padding: 8px;
        border: 2px solid #fff;"></span>`;
    };
    


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
                        slidesPerView={4.5}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                            renderBullet: renderBullet
                        }}
                        modules={[FreeMode, Pagination]}
                        // className="mySwiper"
                        style={{
                            width: "1200px ", height: "330px"
                        }}
                    >
                        <SwiperSlide style={{ width: '350px', margin: '0' }}>
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
                        <SwiperSlide style={{ width: '350px', margin: '0' }}>
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
                        <SwiperSlide style={{ width: '350px', margin: '0' }}>
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
                        <SwiperSlide style={{ width: '350px', margin: '0' }}>
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
                        <SwiperSlide style={{ width: '350px', margin: '0' }}>
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
                        <SwiperSlide style={{ width: '350px', margin: '0' }}>
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