import {Routes,Route} from "react-router-dom"
import { CommitteesPage } from './pages/CommitteesPage';
import { DepNumbersPage } from './pages/depNumbers/DepNumbersPage';
import { DocCirculationPage } from './pages/DocCirculationPage';
import { HomePage } from './pages/HomePage';
import { MeetingsSchedulePage } from './pages/MeetingsSchedulePage';
import { MPNumbersPage } from './pages/MPNumbersPage';
import { TimeTablePage } from './pages/timeTable/TimeTablePage';

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
