import { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchDepNum } from "../../store/action/depNumbersActions";
import "./depNum.scss"


export const DepNumbersPage = () => {

  const {depnum} = useAppSelector(state => state.telNumbers)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchDepNum())
  },[dispatch])

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
        depnum.map(item=> <tbody key={item.id}><tr> 
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