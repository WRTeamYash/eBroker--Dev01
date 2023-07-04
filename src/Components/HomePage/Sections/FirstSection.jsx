import React from "react";
import '../../../CSS/Navbar/nav.css'
import { FaEye } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GoPlay } from 'react-icons/go'
import { BiFilter } from 'react-icons/bi'
import { RiUserSmileLine } from 'react-icons/ri'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import a from 'react-dom'

function FirstSection() {


    return (
        <>
            <div id='mainheroImage'>
                {/* <div className='heroImage' >
            <img
              src={home}
             />
          </div> */}
                <div id='herotexts'>
                    <div>
                        <button className='btn' id='priceteg'> $1,999,000</button>
                        <h1 >Serene Haven Retreat</h1>
                        <p id='specifiaction'>Bedrooms: 5, Bathrooms: 4, Balcony: 2, Pool: 1</p>
                    </div>
                    <div id='viewall'>
                        <button className='view_prop'>
                            <FaEye size={20} className='icon' />
                            view Properties
                        </button>
                        <div>
                            <GoPlay className='playbutton' size={50} />
                        </div>
                    </div>
                </div>
            </div>
            <div id='searchbox'>
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
        </>
    );
}

export default FirstSection;