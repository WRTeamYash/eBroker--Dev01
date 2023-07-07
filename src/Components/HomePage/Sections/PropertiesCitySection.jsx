import React from 'react'
import "../../../CSS/Sections/PropertyCity.css"
import cityImage01 from "../../../assets/assets/City_1.jpg";
import cityImage02 from "../../../assets/assets/City_2.jpg";
import cityImage03 from "../../../assets/assets/City_3.jpg"

const PropertiesCitySection = () => {
    return (
        <section id='main_citySection'>
            <div id='city_con'>

                <div className='prop_city_header'>
                    <div >
                        <h3>
                            Properties <span class="hovertext3">
                                <span class="text" data-text="Nearby">Nearby</span>
                            </span> Cities
                        </h3>
                    </div>
                    <div className='rightside_prop_city_header'>
                        <button className="learn-more" id="viewall">
                            <span aria-hidden="true" className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">See All Properties</span>
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <div className='city_card_sec'>
                        <div id='city_cards'>
                            <div className='top_city_cards'>
                                <div>
                                    <div className="card bg-dark text-white" id='city_card'>
                                        <img src={cityImage01} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <div id='city_img_headlines'>
                                                <h4 className="card-title">New York</h4>
                                                <p className="card-text">22 Properties</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card bg-dark text-white" id='city_card'>
                                        <img src={cityImage02} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <div id='city_img_headlines'>
                                                <h4 className="card-title">California</h4>
                                                <p className="card-text">18 Properties</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card bg-dark text-white" id='city_card_bottom'>
                                    <img src={cityImage03} className="card-img" alt="..." id='bottom_city_card_img' />
                                    <div className="card-img-overlay">
                                        <div id='city_img_headlines'>
                                            <h4 className="card-title">San Francisco</h4>
                                            <p className="card-text">13 Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id='city_cards'>
                            <div>
                                <div className="card bg-dark text-white" id='city_card_bottom'>
                                    <img src={cityImage03} className="card-img" alt="..." id='bottom_city_card_img' />
                                    <div className="card-img-overlay">
                                        <div id='city_img_headlines'>
                                            <h4 className="card-title">Danver</h4>
                                            <p className="card-text">13 Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='top_city_cards'>
                                <div>
                                    <div className="card bg-dark text-white" id='city_card'>
                                        <img src={cityImage01} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <div id='city_img_headlines'>
                                                <h4 className="card-title">Chicago</h4>
                                                <p className="card-text">20 Properties</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card bg-dark text-white" id='city_card'>
                                        <img src={cityImage02} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <div id='city_img_headlines'>
                                                <h4 className="card-title">Los Angeles</h4>
                                                <p className="card-text">15 Properties</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertiesCitySection