import './Committees.scss'
import { Header } from '../../components/Header/Header'
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchCommittees } from "../../store/action/CommitteesActions";

export const CommitteesPage = () => {

  const { Committees } = useAppSelector(state => state.Committees)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCommittees())
  }, [])
  
  return (
    <div className='Committees'>
      <Header />
      <div className='CommitteesBody'>
        <div className='Committees_title'>
          <img src="./images/Frame3.png" alt="" />
          <h2>Մշտական հանձնաժողովները և նրանց գործունեության ոլորտները</h2>
        </div>
        <hr />
        <div className='Committees_main'>
          <h2>ՀՀ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՄՇՏԱԿԱՆ ՀԱՆՁՆԱԺՈՂՈՎՆԵՐԸ ԵՎ ՆՐԱՆՑ ԳՈՐԾՈՒՆԵՈՒԹՅԱՆ ՈԼՈՐՏՆԵՐԸ</h2>
          <div className='Committees_main_page'>
            {
              Committees.map(item => <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
