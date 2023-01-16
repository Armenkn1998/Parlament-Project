import React from 'react'
import './HeaderStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='Header'>
        <div className="header_box">
            <a href="/"><FontAwesomeIcon icon={faAngleLeft} />&nbsp;&nbsp;Հետ</a>
            <div className='logo'> 
              <img src="./images/Logo.png" alt="" />
              <h2>Հայաստանի Հանրապետության
              <p>Ազգային Ժողով
              </p></h2>
            </div>
        </div>
       
         

    </div>
  )
}
