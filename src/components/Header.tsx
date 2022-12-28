import React from 'react'
import './HeaderStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div className='Header'>
        <div className="header_box">
            <a href="/"><FontAwesomeIcon icon={faAngleLeft} />&nbsp;&nbsp;Հետ</a>
            <img src="./images/HeaderLogo.png" alt="" />
        </div>
       
         

    </div>
  )
}
