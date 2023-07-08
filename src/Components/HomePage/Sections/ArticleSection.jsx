import React from 'react'
import "../../../CSS/Sections/ArticleSec.css"
import { Card } from 'react-bootstrap';
import cardImg from '../../../assets/assets/Featured_List_1.jpg'
import { FiArrowRight, FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import adminlogo from "../../../assets/assets/Superman.jpeg"
const ArticleSection = () => {
    return (
        <section id='articles'>
            <div id='main_articleSec'>
                <div className='article_headline'>
                    <div>
                        <h3>
                            Our <span class="hovertext3">
                                <span class="text" data-text="Articles">Articles</span>
                            </span>
                        </h3>
                    </div>
                    <div className='rightside_article_headlin'>
                        <button className="learn-more" id="viewall">
                            <span aria-hidden="true" className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">See All Properties</span>
                        </button>
                    </div>
                </div>
                <div id='article_cards'>
                    <Card id='article_main_card'>
                        <Card.Img variant="top" id='article_card_img' src={cardImg} />
                        <span id='apartment_tag'>aprtment</span>
                        <Card.Body id='article_card_body'>

                            <div id='article_card_headline'>
                                <span>
                                    Property Purchase Laws in USA
                                </span>
                                <p>
                                    The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                </p>
                            </div>
                            <div id='readmore_article'>
                                <button className='readmore'> Read More  <FiArrowRight size={20}/></button>
                               
                            </div>

                        </Card.Body>
                        <Card.Footer id='article_card_footer'>
                            <div id='admin_pic'>
                                <img src={adminlogo} alt="" className='admin' />
                            </div>
                            <div className='article_footer_text'>
                                <span className='byadmin'> By Admin
                                </span>
                                <p>1 day ago</p>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card id='article_main_card'>
                        <Card.Img variant="top" id='article_card_img' src={cardImg} />
                        <span id='apartment_tag'>aprtment</span>
                        <Card.Body id='article_card_body'>

                            <div id='article_card_headline'>
                                <span>
                                    Property Purchase Laws in USA
                                </span>
                                <p>
                                    The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                </p>
                            </div>
                            <div id='readmore_article'>
                                <button className='readmore'> Read More  <FiArrowRight size={20}/></button>
                               
                            </div>

                        </Card.Body>
                        <Card.Footer id='article_card_footer'>
                            <div id='admin_pic'>
                                <img src={adminlogo} alt="" className='admin' />
                            </div>
                            <div className='article_footer_text'>
                                <span className='byadmin'> By Admin
                                </span>
                                <p>1 day ago</p>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card id='article_main_card'>
                        <Card.Img variant="top" id='article_card_img' src={cardImg} />
                        <span id='apartment_tag'>aprtment</span>
                        <Card.Body id='article_card_body'>

                            <div id='article_card_headline'>
                                <span>
                                    Property Purchase Laws in USA
                                </span>
                                <p>
                                    The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                </p>
                            </div>
                            <div id='readmore_article'>
                                <button className='readmore'> Read More  <FiArrowRight size={20}/></button>
                               
                            </div>

                        </Card.Body>
                        <Card.Footer id='article_card_footer'>
                            <div id='admin_pic'>
                                <img src={adminlogo} alt="" className='admin' />
                            </div>
                            <div className='article_footer_text'>
                                <span className='byadmin'> By Admin
                                </span>
                                <p>1 day ago</p>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card id='article_main_card'>
                        <Card.Img variant="top" id='article_card_img' src={cardImg} />
                        <span id='apartment_tag'>aprtment</span>
                        <Card.Body id='article_card_body'>

                            <div id='article_card_headline'>
                                <span>
                                    Property Purchase Laws in USA
                                </span>
                                <p>
                                    The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                </p>
                            </div>
                            <div id='readmore_article'>
                                <button className='readmore'> Read More  <FiArrowRight size={20}/></button>
                               
                            </div>

                        </Card.Body>
                        <Card.Footer id='article_card_footer'>
                            <div id='admin_pic'>
                                <img src={adminlogo} alt="" className='admin' />
                            </div>
                            <div className='article_footer_text'>
                                <span className='byadmin'> By Admin
                                </span>
                                <p>1 day ago</p>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>

        </section>
    )
}

export default ArticleSection
