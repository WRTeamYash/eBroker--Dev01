import React from 'react'
import "../../../CSS/Sections/FooterSectionSec.css"
import eBroker from "../../../assets/eBrokerLogo.svg"
const FooterSection = () => {
    return (
        <section id='footer'>
            <div id='main_footer'>
                <div className='footer_content'>
                    <div id='footer_logo'>
                        <img src={eBroker} alt="eBroker_logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection
