import {useState,useEffect} from 'react';
import { IParlament } from '../models/model';
import {useNavigate} from 'react-router-dom'

export const HomePage = () => {

  const [parlament,setParlament]=useState<IParlament[]>([]);
  const navigate=useNavigate();

  useEffect(()=>{
    fetch('http://localhost:3000/Parlament')
    .then(response=>response.json())
    .then(data=>setParlament(data)
    )
  },[])

  return (

    <div>
      <header className='header'>
       <img src="./images/Logo.png" alt="" />
      <h2>Բարի Գալուստ</h2>
      <h2>Հայաստանի Հանրապետության ազգային ժողով</h2>
      </header>
     {
      parlament?.map(item=><div key={item.id} onClick={()=>navigate('/'+item.title)}>
        <h2>{item.description}</h2></div>
      )
     }
    </div>
  )
}
