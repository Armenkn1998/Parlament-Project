import React from 'react';
import {Routes,Route} from "react-router-dom"
import { Header } from './components/Header';
import { CommitteesPage } from './pages/CommitteesPage';
import { DepNumbersPage } from './pages/DepNumbersPage';
import { DocCirculationPage } from './pages/DocCirculationPage';
import { HomePage } from './pages/HomePage';
import { MeetingsSchedulePage } from './pages/MeetingsSchedule/MeetingsSchedulePage';
import { MPNumbersPage } from './pages/MPNumbersPage';
import { TimeTablePage } from './pages/TimeTablePage';

function App() {
  return (
    <div className='App'>
     <Routes>
        <Route path="/" element={<HomePage/>} />
       
     
          
        <Route path='/DocCirculation' element={<DocCirculationPage/>} />
        <Route path='/TimeTable' element={<TimeTablePage/>} />
        <Route path='/Committees' element={<CommitteesPage/>} />
        <Route path='/MeetingsSchedule' element={<MeetingsSchedulePage/>} />
        <Route path='/MPNumbers' element={<MPNumbersPage/>} />
        <Route path='/DepNumbers' element={<DepNumbersPage/>} />
       
     </Routes>
    </div>
  );
}

export default App;
