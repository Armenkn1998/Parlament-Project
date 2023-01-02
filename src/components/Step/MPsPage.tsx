import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchMpsnumber } from "../../store/action/NumbersAction";
import './StepStyle.scss'

interface Ibos {
  id: number,
  name: string,
  lastname: string,
  firstname: string,
  phonenumber: string,
  key: string
}
export const MPsPage = () => {

  const nobos:Ibos[]=[]
  const newsortnobos: string[] = []
  const aybub:string[] = []

  const bos:Ibos[]=[]

  const { MPs } = useAppSelector(state => state.Mpsnumber)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMpsnumber())
   
  }, [dispatch])


 
const newMOs = MPs.filter(item => item.key === "boss")
 bos.push(...newMOs)


const newnobos= MPs.filter(item => item.key === "noboss")
  
 const sortnobos= newnobos.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1)
 nobos.push(...sortnobos)

 
  for (let i = 0; i < nobos.length; i++) {
    aybub.push(nobos[i].lastname[0])

  }
 

  for (let i = 0; i < aybub.length; i++) {
    if (aybub[i] !== aybub[i + 1]) {
      newsortnobos.push(aybub[i])
    }
  }




  return (
    <div className='Mps'>
      <table className='table1'>
        <thead>
          <tr>
            <th className='th1'>Հ․Հ․</th>
            <th className='th2'>Անուն Ազգանուն Հայրանուն</th>

            <th className='th4'>Ներքին  Հեռ․</th>
          </tr>
        </thead>
        <tbody>
          {
            bos.map((item, index) =>
              <tr key={item.id}>
                <td className='td1'>{index + 1}</td>
                <td className='td2'>{item.name} {item.firstname} {item.lastname}</td>
                <td className='td4'>{item.phonenumber}</td>
              </tr>
            )
          }

        </tbody>
      </table>
      <div className=''>
        {
          newsortnobos.map((item: string, index: number) =>
            item != item + 1 &&
            <div key={index}><div>
              <div className='alfa'> <p>{item}</p></div>
              
            </div>


              <table className='table0'>
                <tbody>
                
                {nobos.map((iteme,index) =>
                  iteme.lastname[0] === item &&

                  <tr key={iteme.id}>
                    <td className='td1'>{index+1}</td>
                    <td className='td2'>{iteme.lastname}      {iteme.name} {iteme.firstname}</td>
                    <td className='td4'>{iteme.phonenumber}</td>
                  </tr>
                )}


              </tbody>
              </table>
            </div>
          )
        }

      </div>


    </div>

  )
}
