import { Header } from '../../components/Header/Header'
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchDocCirculation } from "../../store/action/DocCirculationActions";
import './DocCirculation.scss';

export const DocCirculationPage = () => {

  const { DocCirculation_1, DocCirculation_2, DocCirculation_3 } = useAppSelector(state => state.DocCirculation)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDocCirculation())
  }, [])

  return (
    <div className='DocCirculation'>
      <Header />
      <div className='DocCirculationBody'>
        <div className='DocCirculation_title'>
          <img src="./images/Frame1.png" alt="" />
          <h2>Քաղաքացիների ընդունելության և  փաստաթղթաշրջանառության կարգը</h2>
        </div>
        <hr />
        <div className='DocCirculation_main'>
          <h2>ԿԱՐԳ</h2>
          <div className='DocCirculation_main_page'>
            <h3>I.	Ընդհանուր դրույթներ</h3>
            {
              DocCirculation_1.map(item => <ul key={item.id}>
                <li>{item.text}</li>
              </ul>)
            }
            <h3>I.	Ընդհանուր դրույթներ</h3>
            {
              DocCirculation_2.map(item => <ul key={item.id}>
                <li>{item.text}
                  {item.text_A && <p>{item?.text_A}</p>}
                  {item.text_B && <p>{item?.text_B}</p>}
                </li>
              </ul>)
            }
            <h3>III.	Պաշտոնատար անձանց կողմից իրականացված ընդունելության ժամանակ քաղաքացու կողմից ներկայացված գրավոր դիմումների գրանցում  և հաշվետվողականության ապահովում</h3>
            {
              DocCirculation_3.map(item => <ul key={item.id}>
                <li>{item.text}</li>
              </ul>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

