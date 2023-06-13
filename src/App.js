import './App.css';
import {Route, Routes} from 'react-router-dom';
import Kotisivu from './pages/Kotisivu';
import Yhteystiedot from './pages/Yhteystiedot';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route >
    <Route path="/" element={<Kotisivu/>}/>
    <Route path="/yhteystiedot" element={<Yhteystiedot/>}/>
    </Route>
  </Routes>
  <Footer/>
   </> 
  );
}

export default App;
