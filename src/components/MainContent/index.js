import React from 'react'
import picture from './package-head__image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faCheckCircle,faClock,faCalendar,faReceipt,faStar,faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import './index.scss'

const MainContent = () => {
  return (
    <div class="col-lg-9 bottom-margin">
      <div class="forty-font">Bookings</div>
      <div>
        <h6>Your current upcoming stays</h6>
        <p class="grey-text">Please update with the properity if your travel plans should change or if you wishto make any changes to your stay.</p>
        <ul>
          <li class="blue consistent-padding-10">
            <i>
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faChevronRight}/>
            </span>
            </i>Learn more about our premium subscription
          </li>
        </ul>  
      </div> 
      <div class="container-lg">
        <div class="row">
          <div class="col-lg-5 zero-padding imageDiv">
            <a><img src={picture} alt="logo" /></a>
          </div>
          <div class="col-lg-7 zero-padding">
            <div class="base-padding">
              <h6>The Green View</h6>
              <ul>
                <li class="grey-text consistent-padding-10"><i><FontAwesomeIcon icon={faCheckCircle} /></i>Booking request recieved</li>
                <li class="active-word consistent-padding-10"><i><FontAwesomeIcon icon={faClock} /></i>Awaiting confirmation from Hotel</li>
              </ul>
            </div>
            <div class="base-padding bottom-margin-160">
              <h6>Superior Premium</h6>
              <table>
                <tr class="grey-text consistent-padding-10">
                  <th><i><FontAwesomeIcon icon={faCalendar} /></i></th>
                  <th>Check-in:</th>
                  <th><i><FontAwesomeIcon icon={faReceipt} /></i></th>
                  <th>Reference</th>
                </tr>
                <tr>
                  <td></td>
                  <td ><h6 class="black-font">July 9th, 2018</h6></td>
                  <td></td>
                  <td ><h6 class="black-font">#UC311</h6></td>
                </tr>
              </table>
            </div>
            <div class="base-bottom">
              <div class="base-btn base-btn-active"><i><FontAwesomeIcon icon={faStar} /></i>Rate your stay</div>
              <div class="base-btn grey-text"><i><FontAwesomeIcon icon={faPaperPlane} /></i>Email the property</div>
            </div>            
          </div>      
        </div>
      </div>
    </div>
  )
}

export default MainContent