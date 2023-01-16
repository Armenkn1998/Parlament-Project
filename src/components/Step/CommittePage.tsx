import {useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchCommitte } from "../../store/action/NumbersAction";
import './StepStyle.scss'

export const CommittePage = () => {

  const {Committe} = useAppSelector(state => state.Committes)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchCommitte())
  },[])

  return (
    <div>
             <table className='table2'>
      <thead>
        <tr>
          <th className='th1'>Հանձնաժողովի&nbsp; Անվանումը</th>
          <th className='th2'>Անդամներ</th>
          <th className='th3'>Քաղ. Հեռ․</th>
          <th className='th4'>Ներքին  Հեռ․</th>
        </tr>
      </thead>
      <tbody>
        {
          Committe.map(item=>
            <tr key={item.id}>
              <td className='td1'>{item.name}</td>
              <td className='td2'>{item.member1}<br/><span>տեղ.</span>{item.member2}</td>
              <td className='td3'>{item.cityphone}</td>
              <td className='td4'>{item.internalphone}<br/>{item.internalphone2}</td>
                         
            </tr>
            )
        }
      </tbody>
    </table>
    </div>
  )
}
