import React from 'react'
import "../../../CSS/Sections/Properties.css"

import Card from 'react-bootstrap/Card';
import cardImg from '../../../assets/assets/Featured_List_1.jpg'
import { FiArrowRightCircle, FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import { RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line } from 'react-icons/ri'



const PropertiesSection = () => {
    return (
        <section id='main_properties'>
            <div className='properties_sec'>
                <div id='prop'>
                    <div className='prop_header'>
                        <div>
                            <h3>
                                Most <span class="hovertext2">
                                    <span class="text" data-text="Viewed"> Viewed</span>
                                </span> Properties
                            </h3>
                        </div>
                        <div class='rightside_prop_header'>
                            <button class="learn-more" id="viewall">
                                <span aria-hidden="true" class="circle">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">See All Properties</span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div id='prop_cards'>
                        <div className='cards_sec'>
                            <div id='prop_cards_left'>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg} />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <button className='prop_top_button'>
                                                Feature
                                            </button>
                                            <button className='prop_top_likebutton'>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                            <button className='prop_down_button'>
                                                Sell
                                            </button>
                                            <p className='prop_down_text'>
                                                $1,999,000 / USD
                                            </p>

                                            <div>
                                                <div id='prop_card_mainbody'>
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
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg} />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <button className='prop_top_button'>
                                                Feature
                                            </button>
                                            <button className='prop_top_likebutton'>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                            <button className='prop_down_button'>
                                                Sell
                                            </button>
                                            <p className='prop_down_text'>
                                                $1,999,000 / USD
                                            </p>

                                            <div>
                                                <div id='prop_card_mainbody'>
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
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg} />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <button className='prop_top_button'>
                                                Feature
                                            </button>
                                            <button className='prop_top_likebutton'>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                            <button className='prop_down_button'>
                                                Sell
                                            </button>
                                            <p className='prop_down_text'>
                                                $1,999,000 / USD
                                            </p>
                                            <div>
                                                <div id='prop_card_mainbody'>
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
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                            <div id='prop_cards_left'>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg} />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <button className='prop_top_button'>
                                                Feature
                                            </button>
                                            <button className='prop_top_likebutton'>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                            <button className='prop_down_button'>
                                                Sell
                                            </button>
                                            <p className='prop_down_text'>
                                                $1,999,000 / USD
                                            </p>
                                            <div>
                                                <div id='prop_card_mainbody'>
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
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg} />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <button className='prop_top_button'>
                                                Feature
                                            </button>
                                            <button className='prop_top_likebutton'>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                            <button className='prop_down_button'>
                                                Sell
                                            </button>
                                            <p className='prop_down_text'>
                                                $1,999,000 / USD
                                            </p>

                                            <div>
                                                <div id='prop_card_mainbody'>
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
                                        </Card.Body>


                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg} />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <button className='prop_top_button'>
                                                Feature
                                            </button>
                                            <button className='prop_top_likebutton'>
                                                <AiOutlineHeart size={25} />
                                            </button>
                                            <button className='prop_down_button'>
                                                Sell
                                            </button>
                                            <p className='prop_down_text'>
                                                $1,999,000 / USD
                                            </p>

                                            <div>
                                                <div id='prop_card_mainbody'>
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
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PropertiesSection
