import React from "react";
import '../../../CSS/Sections/HeroSec.css'
import { FaEye } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GoPlay } from 'react-icons/go'
import { BiFilter } from 'react-icons/bi'
import { RiUserSmileLine } from 'react-icons/ri'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import a from 'react-dom'
import HeroSlider, {
    Slide, ButtonsNav} from "hero-slider";
import SlideImage01 from "../../../assets/assets/Most_View_1.jpg"
import SlideImage02 from "../../../assets/assets/Most_View_3.jpg"
import SlideImage03 from "../../../assets/assets/Most_View_6.jpg"

function HeroSection() {



    return (
        <>
            <section id='mainheroImage'>
                <HeroSlider
                    height={"90vh"}
                    slidingAnimation="fade"
                    orientation="horizontal"
                    initialSlide={1}
                    onBeforeChange={(previousSlide, nextSlide) =>
                        console.log("onBeforeChange", previousSlide, nextSlide)
                    }
                    onChange={(nextSlide) => console.log("onChange", nextSlide)}
                    onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
                    style={{
                        backgroundColor: "#f5f5f5"
                    }}
                    settings={{
                        slidingDuration: 400,
                        slidingDelay: 100,
                        shouldAutoplay: true,
                        shouldDisplayButtons: true,
                        autoplayDuration: 8000,
                        height: "100vh"
                    }}
                >
                    <div id='herotexts'>
                        <div>
                            <button className='btn' id='priceteg'> $1,999,000</button>
                            <h3 >Serene Haven Retreat</h3>
                            <p id='specifiaction'>Bedrooms: 5, Bathrooms: 4, Balcony: 2, Pool: 1</p>
                        </div>
                        <div>

                        </div>
                        <div id='viewall_hero_prop'>
                            <button className='view_prop'>
                                <FaEye size={20} className='icon' />
                                view Properties
                            </button>
                            <div>
                                <GoPlay className='playbutton' size={50} />
                            </div>
                        </div>

                    </div>

                    <Slide
                        background={{
                            // backgroundColor: "#343A3FC7",
                            // backgroundBlendMode: "darken",
                            backgroundImageSrc: SlideImage01,


                        }}

                    />

                    <Slide
                        // shouldRenderMask 
                        // label="Bogliasco - Italy"
                        background={{
                            // backgroundColor: "#343A3FC7",
                            // backgroundBlendMode: "darken",
                            backgroundImageSrc: SlideImage02,

                        }}
                    />

                    <Slide
                        // shouldRenderMask
                        // label="County Clare - Ireland"
                        background={{
                            // backgroundColor: "#343A3FC7",
                            // backgroundBlendMode: "darken",
                            backgroundImageSrc: SlideImage03,


                        }}
                    />

                 {/* <ButtonsNav /> */}

                </HeroSlider>
                <div className="container" id='searchbox'>
                    <ButtonGroup >
                        <button id='sellbutton' >Sell</button>
                        <button id='rentbutton'>Rent</button>
                    </ButtonGroup>
                    <div id='searchcard'>
                        <div id='searchbuttoon'>
                            <FiSearch size={20} />
                            <input className='searchinput' placeholder='Search your propery' />
                        </div>
                        <div id='leftside-buttons'>
                            <button className='filter'> <BiFilter size={25} /> Filter</button>
                            <button className='find'>Search</button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;