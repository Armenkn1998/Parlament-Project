import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { fetching,fetchSuccess,fetchError } from '../../store/slice/timeTableSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchTimeTable } from "../../store/action/timeTableActions";
import "./timeTable.scss"


export const TimeTablePage = () => {

  const {telNumbers} = useAppSelector(state => state.telNumbers)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchTimeTable())
  },[])
  console.log(telNumbers);

  return (
    <div className='timeTable'>
      <Header/>
      <div className='main_2'>
        <div className='header_'>
          <img src="./images/Phones.png" alt='' />
          <h2>Կառուցվածքային ստորաբաժանումների հեռախոսահամարներ</h2>
        </div>

        <table>
          <thead>
            <tr>
              <th>Ստորաբաժանման անվանումը</th>
              <th>Ներքին հեռ․</th>
            </tr>
          </thead>
        {
          telNumbers.map(item=> <tbody key={item.id}><tr> 
            <td>{item.title}</td>
            <td>{item.tel}</td>
            </tr></tbody>
          )
        }
        </table>
      </div>
      
    </div>
  )
}
