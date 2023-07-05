import React from 'react';
import logo from '../../assets/Path 11370.svg';
import logoname from '../../assets/eBroker.svg';
import '../../CSS/Navbar/nav.css';
import { RiUserSmileLine } from 'react-icons/ri'
import Dropdown from 'react-bootstrap/Dropdown';
// import Link from "react-dom";



const Nav = () => {
  return (
    <>
      <div>
        <nav className="navbar header navbar-expand-lg navbar-dark"> 
          <div className="container-fluid">
            <div className="left-side">
              <a className="navbar-brand" to="/">
                <img src={logo} alt="Logo" className="logo" />
                <img src={logoname} alt="Logo" className="logo2" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <Dropdown.Toggle menuVariant='dark' id="dropdown-basic">
                      Properties
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="//action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="//action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="//action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle menuVariant='dark' id="dropdown-basic">
                      Pages
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="//action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="//action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="//action-3">Something else</Dropdown.Item>
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
                    <Dropdown.Toggle menuVariant='dark' id="dropdown-basic">
                      Language
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="//action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="//action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="//action-3">Something else</Dropdown.Item>
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
   
      </div>
    </>
  );
};

export default Nav;
