import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faInbox,faBed,faUserCog,faLifeRing,faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';

import './index.scss'

const Sidenav = () => {
  return (
    <div class="col-lg-3 bottom-margin">
      <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i><FontAwesomeIcon icon={faChevronDown} /></i></span>
        </button>  
        <div class="collapse navbar-collapse nav-height" id="navbarSupportedContent">
          <svg width="60" height="45" class="width-100">
            <rect class="user-logo" width="30" height="30"/>
            <text x="20" y="25" fill="white">JD</text>
          </svg>
          <div class="width-100"><p class="width-100">John Doe</p><p class="grey-text">Premium Nomad</p></div>
          <div class="nav-btn active-btn"><i><FontAwesomeIcon icon={faInbox} className="white-colour"/></i>Bookings</div>
          <ul class="width-100 grey-text">
            <li class="nav-btn"><i><FontAwesomeIcon icon={faBed} /></i>Refer and Earn</li>
            <li class="nav-btn"><i><FontAwesomeIcon icon={faUserCog} /></i>Account Settings</li>
          </ul>
          <ul class="width-100">
            SUPPORT
            <li class="nav-btn grey-text"><i><FontAwesomeIcon icon={faLifeRing} /></i>Contact us</li>
            <li class="nav-btn grey-text"><i><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></i>FAQ</li>
          </ul>
          <div class="bottom-btn width-100 grey-text">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="custom-switch" checked />
              <label class="custom-control-label" for="custom-switch">Sign Out</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidenav