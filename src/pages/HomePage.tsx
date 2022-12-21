import {useState,useEffect} from 'react';
import { fetching,fetchSuccess,fetchError } from '../store/slice/parlamentSlice';
import {useNavigate} from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchParlament } from "../store/action/parlamentActions";
export const HomePage = () => {

 
  const navigate=useNavigate();
  const {parlament} = useAppSelector(state => state.parlament)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchParlament())
  },[])
  
console.log(parlament);

  return (

    <div>
      <header className='header'>
       <img src="./images/Logo.png" alt="" />
      <h2>Բարի Գալուստ</h2>
      <h2>Հայաստանի Հանրապետության ազգային ժողով</h2>
      </header>
      <h1>Հարգելի քաղաքացի ընտրեք ձեզ հետաքրքրող բաժինը ինֆորմացիա ստանալու համար</h1>
     {
      parlament?.map(item=><div key={item.id} onClick={()=>navigate('/'+item.title)}>
        <h2>{item.description}</h2></div>
      )
     }
    </div>
  )
}
