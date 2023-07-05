import React from 'react'
import '../../../CSS/Sections/featureSec.css'
import Card from 'react-bootstrap/Card';
import cardImg from '../../../assets/assets/Featured_List_1.jpg'
import { FiArrowRightCircle, FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import { RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line } from 'react-icons/ri'




const FeatureSection = () => {
  return (
    <section id='feature'>
      <div className='container'>
        <div id='main_features'>
          <div className='feature_header'>
            <div>
              <h1>
                Discover Our Featured Listings
              </h1>
            </div>
            <div className='rightside_header'>
              <FiArrowRightCircle size={30} />
              <p id='text_header'>See All Properties</p>

            </div>
          </div>
        </div>
        <div id='feature_cards'>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
        </div>


        {/* ==================================== static cards========================================== */}
        <div id='feature_cards'>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
                  <h7>
                    Luxury villa in Rego Park
                  </h7>
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
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
