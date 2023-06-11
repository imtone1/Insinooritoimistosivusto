import './App.css';
import {Route, Routes} from 'react-router-dom';
import Kotisivu from './pages/Kotisivu';

function App() {
  return (
    <>
    
    <Routes>
    <Route >
    <Route path="/" element={<Kotisivu/>}/>
    </Route>
  </Routes>
   </> 
  );
}

export default App;
