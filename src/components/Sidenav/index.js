import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox,faBed,faUserCog,faLifeRing,faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {Navbar} from 'react-bootstrap'

import './index.scss'

const Sidenav = () => {
  return (
    <div className="col-lg-3 bottom-margin">
      <Navbar expand="lg" className="navbar navbar-expand-lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mr-auto">
            <svg width="60" height="45" className="width-100">
                  <rect className="user-logo" width="30" height="30"/>
                  <text x="20" y="25" fill="white">JD</text>
                </svg>
                <div className="width-100"><p className="width-100">John Doe</p><p className="grey-text">Premium Nomad</p></div>
                <div className="nav-btn active-btn"><i><FontAwesomeIcon icon={faInbox} className="white-colour"/></i>Bookings</div>
                <ul className="width-100 grey-text">
                  <li className="nav-btn"><i><FontAwesomeIcon icon={faBed} /></i>Refer and Earn</li>
                  <li className="nav-btn"><i><FontAwesomeIcon icon={faUserCog} /></i>Account Settings</li>
                </ul>
                <ul className="width-100">
                  SUPPORT
                  <li className="nav-btn grey-text"><i><FontAwesomeIcon icon={faLifeRing} /></i>Contact us</li>
                  <li className="nav-btn grey-text"><i><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></i>FAQ</li>
                </ul>
                <div className="bottom-btn width-100 grey-text">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="custom-switch" checked />
                    <label className="custom-control-label" for="custom-switch">Sign Out</label>
                  </div>
                </div>
                
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Sidenav