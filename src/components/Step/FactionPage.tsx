import {useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchFraction } from "../../store/action/NumbersAction";
import './StepStyle.scss'



export const FactionPage = () => {

  const {Fraction} = useAppSelector(state => state.Fraction)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchFraction())
  },[])

  return (
    <div>
    <table className='table3'>
      <thead>
        <tr>
          <th className='th1'>Կուսակցության&nbsp; Անվանումը</th>
          <th className='th2'>Անդամներ</th>
          <th className='th3'>Քաղաքային Հեռ․</th>
          <th className='th4'>Ներքին  Հեռ․</th>
        </tr>
      </thead>
      <tbody>
        {
          Fraction.map(item=>
            <tr key={item.id}>
              <td className='td1'>{item.name}</td>
              <td className='td2'>{item.leader}<br/><span>քարտուղար </span>{item.member}</td>
              <td className='td3'>{item.cityphone}</td>
              <td className='td4'>{item.internalphone}</td>
                         
            </tr>
            )
        }
      </tbody>
    </table>
    </div>
  )
}
