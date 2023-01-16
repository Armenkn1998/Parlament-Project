import { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchTimeTable } from "../../store/action/timeTableActions";
import "./timeTable.scss"


export const TimeTablePage = () => {

  const {admission, citizenAdmission} = useAppSelector(state => state.admission)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchTimeTable())
  },[])

  return (
    <div className='depNum'>
      <Header/>
      <div className='main_1'>
        <div className='header_'>
          <img src="./images/day.png" alt='' />
          <h2>Քաղաքացիների ընդունելության ժամանակացույց</h2>
        </div>

        <h3 className='h3-1'>ԺԱՄԱՆԱԿԱՑՈՒՅՑ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՄՇՏԱԿԱՆ ՀԱՆՁՆԱԺՈՂՈՎՆԵՐԻ ԿՈՂՄԻՑ  ՔԱՂԱՔԱՑԻՆԵՐԻ ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆՆԵՐԻ(2022 թ. նոյեմբեր)</h3>

        <table className='secondTable'>
          <thead>
            <tr>
              <th>Ստորաբաժանման անվանումը</th>
              <th>Օրը</th>
              <th>Ժամը</th>
            </tr>
          </thead>
          {
            admission.map(item=> <tbody key={item.id}><tr> 
              <td>{item.name}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              </tr></tbody>
            )
          }
        </table>

        <h3 className='h3-2'>ԺԱՄԱՆԱԿԱՑՈՒՅՑ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՆԱԽԱԳԱՀԻ ՏԵՂԱԿԱԼՆԵՐԻ ԿՈՂՄԻՑ ԿԱԶՄԱԿԵՐՊՎՈՂՔԱՂԱՔԱՑԻՆԵՐԻ ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆՆԵՐԻ</h3>
        <table>
          <thead className='secondTable'>
            <tr>
              <th>Ստորաբաժանման անվանումը</th>
              <th>Օրը</th>
              <th>Ժամը</th>
            </tr>
          </thead>
        {
          citizenAdmission.map(item=> <tbody key={item.id}><tr> 
            <td>{item.name}</td>
            <td>{item.day}</td>
            <td>{item.time}</td>
            </tr></tbody>
          )
        }
        </table>
      </div>
      
    </div>
  )
}
