import React from 'react'
import logo from './nomadrental-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

import './index.scss'

const Topmenu = () => {
  return (
    <div className="d-flex top-nav">
        <div className="mr-auto p-2"><a><img src={logo} alt="logo"/></a></div>
        <div className="d-inline p-2 centerhorizontally choose-location grey-text">Choose a city</div>
        <div className="d-inline p-2 centerhorizontally grey-text"><FontAwesomeIcon icon={faBars} /></div>
    </div>
  )
}

export default Topmenu