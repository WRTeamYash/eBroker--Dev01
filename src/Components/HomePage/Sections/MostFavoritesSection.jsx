import React from 'react'
import "../../../CSS/Sections/MostFavorites.css"
import { Card } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";

import cardImg from '../../../assets/assets/Featured_List_1.jpg'
import { FiArrowRightCircle, FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import { RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line } from 'react-icons/ri'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const MostFavoritesSection = () => {

    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
        outline: 1px solid #000;
        font-size: 20px;
        padding: 8px;
        border: 2px solid #fff;"></span>`;
    };



    return (
        <section id='most_fav'>
            <div className='most_fav_con'>
                <div className='most_fav_header'>
                    <div>
                        <h3>
                            Most <span class="hovertext3">
                                <span class="text" data-text="Favorites">Favorites</span>
                            </span> Properties
                        </h3>
                    </div>
                    <div className='rightside_most_fav_header'>
                        <button className="learn-more" id="viewall">
                            <span aria-hidden="true" className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">See All Properties</span>
                        </button>
                    </div>
                </div>
                <div className='most_fav_slider'>
                    <Swiper
                        // height={"100vh"}
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                            renderBullet: renderBullet
                        }}
                        modules={[FreeMode, Pagination]}
                        // className="mySwiper"
                        style={{
                            width: "1500px ", height: "500px", 
                            borderRadius: "10px"   
                        }}
                    >
                        <SwiperSlide style={{ width: '450px', margin: '0' }}>
                            <Card id='main_card'>
                                <Card.Img variant="top" id='card_img' src={cardImg} />
                                <Card.Body>
                                    <button className='top_button'>
                                        Feature
                                    </button>
                                    <button className='top_likebutton'>
                                        <AiOutlineHeart size={25} />
                                    </button>
                                    <button className='down_button'>
                                        Sell
                                    </button>
                                    <p className='down_text'>
                                        $1,999,000 / USD
                                    </p>

                                    <div>
                                        <div id='card_mainbody'>
                                            <BiHomeSmile size={18} />
                                            <p className='text_mainbody'> Home </p>
                                        </div>
                                        <div id='card_middletext'>
                                            <h6>
                                                Luxury villa in Rego Park
                                            </h6>
                                            <p>
                                                California City, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer id='card_footer'>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <RiHotelBedLine size={22} />
                                            <p className='text_footer'> 3 Bedrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiBuilding3Line size={22} />
                                            <p className='text_footer'> 1200 Sqft </p>
                                        </div>

                                    </div>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <FiCloudDrizzle size={22} />
                                            <p className='text_footer'> 4 Bathrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiParkingBoxLine size={22} />
                                            <p className='text_footer'> 2 Parking </p>
                                        </div>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '450px', margin: '0' }}>
                            <Card id='main_card'>
                                <Card.Img variant="top" id='card_img' src={cardImg} />
                                <Card.Body>
                                    <button className='top_button'>
                                        Feature
                                    </button>
                                    <button className='top_likebutton'>
                                        <AiOutlineHeart size={25} />
                                    </button>
                                    <button className='down_button'>
                                        Sell
                                    </button>
                                    <p className='down_text'>
                                        $1,999,000 / USD
                                    </p>

                                    <div>
                                        <div id='card_mainbody'>
                                            <BiHomeSmile size={18} />
                                            <p className='text_mainbody'> Home </p>
                                        </div>
                                        <div id='card_middletext'>
                                            <h6>
                                                Luxury villa in Rego Park
                                            </h6>
                                            <p>
                                                California City, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer id='card_footer'>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <RiHotelBedLine size={22} />
                                            <p className='text_footer'> 3 Bedrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiBuilding3Line size={22} />
                                            <p className='text_footer'> 1200 Sqft </p>
                                        </div>

                                    </div>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <FiCloudDrizzle size={22} />
                                            <p className='text_footer'> 4 Bathrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiParkingBoxLine size={22} />
                                            <p className='text_footer'> 2 Parking </p>
                                        </div>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '450px', margin: '0' }}>
                            <Card id='main_card'>
                                <Card.Img variant="top" id='card_img' src={cardImg} />
                                <Card.Body>
                                    <button className='top_button'>
                                        Feature
                                    </button>
                                    <button className='top_likebutton'>
                                        <AiOutlineHeart size={25} />
                                    </button>
                                    <button className='down_button'>
                                        Sell
                                    </button>
                                    <p className='down_text'>
                                        $1,999,000 / USD
                                    </p>

                                    <div>
                                        <div id='card_mainbody'>
                                            <BiHomeSmile size={18} />
                                            <p className='text_mainbody'> Home </p>
                                        </div>
                                        <div id='card_middletext'>
                                            <h6>
                                                Luxury villa in Rego Park
                                            </h6>
                                            <p>
                                                California City, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer id='card_footer'>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <RiHotelBedLine size={22} />
                                            <p className='text_footer'> 3 Bedrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiBuilding3Line size={22} />
                                            <p className='text_footer'> 1200 Sqft </p>
                                        </div>

                                    </div>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <FiCloudDrizzle size={22} />
                                            <p className='text_footer'> 4 Bathrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiParkingBoxLine size={22} />
                                            <p className='text_footer'> 2 Parking </p>
                                        </div>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '450px', margin: '0' }}>
                            <Card id='main_card'>
                                <Card.Img variant="top" id='card_img' src={cardImg} />
                                <Card.Body>
                                    <button className='top_button'>
                                        Feature
                                    </button>
                                    <button className='top_likebutton'>
                                        <AiOutlineHeart size={25} />
                                    </button>
                                    <button className='down_button'>
                                        Sell
                                    </button>
                                    <p className='down_text'>
                                        $1,999,000 / USD
                                    </p>

                                    <div>
                                        <div id='card_mainbody'>
                                            <BiHomeSmile size={18} />
                                            <p className='text_mainbody'> Home </p>
                                        </div>
                                        <div id='card_middletext'>
                                            <h6>
                                                Luxury villa in Rego Park
                                            </h6>
                                            <p>
                                                California City, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer id='card_footer'>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <RiHotelBedLine size={22} />
                                            <p className='text_footer'> 3 Bedrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiBuilding3Line size={22} />
                                            <p className='text_footer'> 1200 Sqft </p>
                                        </div>

                                    </div>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <FiCloudDrizzle size={22} />
                                            <p className='text_footer'> 4 Bathrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiParkingBoxLine size={22} />
                                            <p className='text_footer'> 2 Parking </p>
                                        </div>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '450px', margin: '0' }}>
                            <Card id='main_card'>
                                <Card.Img variant="top" id='card_img' src={cardImg} />
                                <Card.Body>
                                    <button className='top_button'>
                                        Feature
                                    </button>
                                    <button className='top_likebutton'>
                                        <AiOutlineHeart size={25} />
                                    </button>
                                    <button className='down_button'>
                                        Sell
                                    </button>
                                    <p className='down_text'>
                                        $1,999,000 / USD
                                    </p>

                                    <div>
                                        <div id='card_mainbody'>
                                            <BiHomeSmile size={18} />
                                            <p className='text_mainbody'> Home </p>
                                        </div>
                                        <div id='card_middletext'>
                                            <h6>
                                                Luxury villa in Rego Park
                                            </h6>
                                            <p>
                                                California City, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer id='card_footer'>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <RiHotelBedLine size={22} />
                                            <p className='text_footer'> 3 Bedrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiBuilding3Line size={22} />
                                            <p className='text_footer'> 1200 Sqft </p>
                                        </div>

                                    </div>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <FiCloudDrizzle size={22} />
                                            <p className='text_footer'> 4 Bathrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiParkingBoxLine size={22} />
                                            <p className='text_footer'> 2 Parking </p>
                                        </div>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '450px', margin: '0' }}>
                            <Card id='main_card'>
                                <Card.Img variant="top" id='card_img' src={cardImg} />
                                <Card.Body>
                                    <button className='top_button'>
                                        Feature
                                    </button>
                                    <button className='top_likebutton'>
                                        <AiOutlineHeart size={25} />
                                    </button>
                                    <button className='down_button'>
                                        Sell
                                    </button>
                                    <p className='down_text'>
                                        $1,999,000 / USD
                                    </p>

                                    <div>
                                        <div id='card_mainbody'>
                                            <BiHomeSmile size={18} />
                                            <p className='text_mainbody'> Home </p>
                                        </div>
                                        <div id='card_middletext'>
                                            <h6>
                                                Luxury villa in Rego Park
                                            </h6>
                                            <p>
                                                California City, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>

                                <Card.Footer id='card_footer'>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <RiHotelBedLine size={22} />
                                            <p className='text_footer'> 3 Bedrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiBuilding3Line size={22} />
                                            <p className='text_footer'> 1200 Sqft </p>
                                        </div>

                                    </div>
                                    <div className='footer_body'>
                                        <div id='footer_content'>
                                            <FiCloudDrizzle size={22} />
                                            <p className='text_footer'> 4 Bathrooms </p>
                                        </div>
                                        <div id='footer_content'>
                                            <RiParkingBoxLine size={22} />
                                            <p className='text_footer'> 2 Parking </p>
                                        </div>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default MostFavoritesSection