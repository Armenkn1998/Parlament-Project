import React from 'react'
import { Header } from '../../components/Header';

import Calendar  from '../../components/Calendar';
import  "./index.scss"
export const MeetingsSchedulePage = () => {
  
  return (
    <div>
      <Header />

      <div className="demo">
        <div className='head_box'>
          <img src="./images/Meet.png" alt="" />
          <h2>ԱԺ նիստերի ժամանակացույց</h2>
        </div>
        <div className='line'></div>
        <Calendar />
      </div>
    </div>
  )
}
