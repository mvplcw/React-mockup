import React from 'react'
import picture from './package-head__image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faCheckCircle,faClock,faCalendar,faReceipt,faStar,faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import './index.scss'

const MainContent = () => {
  return (
    <div className="col-lg-9 bottom-margin">
      <div className="forty-font">Bookings</div>
      <div>
        <h6>Your current upcoming stays</h6>
        <p className="grey-text">Please update with the properity if your travel plans should change or if you wishto make any changes to your stay.</p>
        <ul>
          <li className="blue consistent-padding-10">
            <i>
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faChevronRight}/>
            </span>
            </i>Learn more about our premium subscription
          </li>
        </ul>  
      </div> 
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-5 zero-padding imageDiv">
            <a><img src={picture} alt="logo" /></a>
          </div>
          <div className="col-lg-7 zero-padding">
            <div className="base-padding">
              <h6>The Green View</h6>
              <ul>
                <li className="grey-text consistent-padding-10"><i><FontAwesomeIcon icon={faCheckCircle} /></i>Booking request recieved</li>
                <li className="active-word consistent-padding-10"><i><FontAwesomeIcon icon={faClock} /></i>Awaiting confirmation from Hotel</li>
              </ul>
            </div>
            <div className="base-padding bottom-margin-160">
              <h6>Superior Premium</h6>
              <table>
                <thead className="grey-text consistent-padding-10">
                  <th><i><FontAwesomeIcon icon={faCalendar} /></i></th>
                  <th>Check-in:</th>
                  <th><i><FontAwesomeIcon icon={faReceipt} /></i></th>
                  <th>Reference</th>
                </thead>
                <tbody>
                  <td></td>
                  <td ><h6 className="black-font">July 9th, 2018</h6></td>
                  <td></td>
                  <td ><h6 className="black-font">#UC311</h6></td>
                </tbody>
              </table>
            </div>
            <div className="base-bottom">
              <div className="base-btn base-btn-active"><i><FontAwesomeIcon icon={faStar} /></i>Rate your stay</div>
              <div className="base-btn grey-text"><i><FontAwesomeIcon icon={faPaperPlane} /></i>Email the property</div>
            </div>            
          </div>      
        </div>
      </div>
    </div>
  )
}

export default MainContent