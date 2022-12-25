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

  const [nobos, setNobos] = useState<Ibos[]>([])
  const [newsortnobos, setnewsortnobos] = useState<any>([])
  const bos: Ibos[] = []


  let aybub: any = []
  let x: any = []

  const { MPs } = useAppSelector(state => state.Mpsnumber)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMpsnumber())


    const newnobos: Ibos[] = MPs.filter(item => item.key === "noboss")


    newnobos.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1)
    nobos.push(...newnobos)
  
  
  
    for (let i = 0; i < nobos.length; i++) {
      aybub.push(nobos[i].lastname[0])
    }
  
  
    for (let i = 0; i < aybub.length; i++) {
      if (aybub[i] !== aybub[i + 1]) {
        newsortnobos.push(aybub[i])
      }
    }
  

  }, [])


  const newMOs: Ibos[] = MPs.filter(item => item.key === "boss")
  bos.push(...newMOs);









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
      <div className='alfa'>
        {
          newsortnobos.map((item: string, index: number) =>
            item != item + 1 &&
            <div key={index}><div>
              <div> {item}</div>
            </div>


              <table className='table0'><tbody>

                {nobos.map((iteme) =>
                  iteme.lastname[0] === item &&

                  <tr key={iteme.id}>
                    <td className='td1'>{iteme.id}</td>
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
