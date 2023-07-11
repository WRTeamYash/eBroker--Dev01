import React, { useState } from 'react';
import Logo from '../../assets/eBrokerLogo.svg';
import './nav.css';
import { RiUserSmileLine, RiPagesLine, RiContactsLine } from 'react-icons/ri'
import { CloseButton, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { FaBuilding } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md'


const Nav = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <nav className="navbar header navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <div className="left-side">
              <a className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </a>
              <button className="navbar-toggler" type="button" onClick={handleShow}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="center-side">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/">Home</a>
                  </li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Properties
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">All Properties</Dropdown.Item>
                      <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                      <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                      <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Pages
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">All Properties</Dropdown.Item>
                      <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                      <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                      <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <li className="nav-item">
                    <a className="nav-link active" to="/">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" to="/">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu id='language'>
                      <Dropdown.Item href="">English</Dropdown.Item>
                      <Dropdown.Item href="">Arebic</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <li className="nav-item">
                    <a className="nav-link active" to="/"> <RiUserSmileLine size={20} className='icon' />
                      Login/Register</a>
                  </li>
                  <li className="nav-item">
                    <button className="btn" id="addbutton">Add Property</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Offcanvas show={show} onHide={handleClose} placement='end' scroll={false} backdrop={true} style={{
          width: "90%"
        }}>
          <Offcanvas.Header >
            <Offcanvas.Title>
              <span className='title-name'>eBroker</span>
            </Offcanvas.Title>
            <Offcanvas.Title>           
              <CloseButton onClick={handleClose}/>   
              {/* <span className='title-icon' onClick={handleClose}><AiOutlineClose size={24} /></span> */}
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mobile_nav">
              <ul className="navbar-nav" id='mobile-ul'>
                <li className="nav-item">
                  {/* <div className='mobile-nav-buttons'>
                    <AiOutlineHome size={24} /> */}
                    <button className="nav-link " aria-current="page" to="/"> Home</button>
                  {/* </div> */}
                </li>
                <Dropdown>
                  {/* <div className='mobile-nav-dropdown'>
                    <FaBuilding size={22} className='' /> */}
                    <Dropdown.Toggle id="dropdown-basic">
                      Properties
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">All Properties</Dropdown.Item>
                      <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                      <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                      <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                    </Dropdown.Menu>
                  {/* </div> */}
                </Dropdown>

                <Dropdown>
                  {/* <div className='mobile-nav-dropdown'>
                    <RiPagesLine size={22} /> */}
                    <Dropdown.Toggle id="dropdown-basic">
                      Pages
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">All Properties</Dropdown.Item>
                      <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                      <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                      <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                      <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                    </Dropdown.Menu>
                  {/* </div> */}
                </Dropdown>
                <li className="nav-item">
                {/* <div className='mobile-nav-buttons'>
                    <RiContactsLine size={20} c /> */}
                    <button className="nav-link active" to="/">  Contact Us</button>
                  {/* </div> */}
                </li>
                <li className="nav-item">
                  <button className="nav-link active" to="/">About Us</button>
                </li>
                {/* </ul>
                <ul className="navbar-nav ml-auto"> */}
                <Dropdown id='mobile-dropdown'>
                  <Dropdown.Toggle id="dropdown-basic"> 
                  {/* <MdLanguage size={20} className='icon' /> */}
                    Language
                  </Dropdown.Toggle>
                  <Dropdown.Menu id='language'>
                    <Dropdown.Item href="">English</Dropdown.Item>
                    <Dropdown.Item href="">Arebic</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <li className="nav-item">
                  <a className="nav-link active" to="/"> 
                  {/* <RiUserSmileLine size={20} className='icon' /> */}
                    Login/Register</a>
                </li>
                <li className="nav-item">
                  <button className="" id="addbutton-mobile">
                     {/* <AiOutlinePlusCircle size={20} className='icon' /> */}
                   Add Property</button>
                </li>
              </ul>


            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </div>
    </>
  );
};

export default Nav;
