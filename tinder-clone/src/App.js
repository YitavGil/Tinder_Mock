import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Onboard from './pages/Onboard';
import Navbar from './comps/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const authToken = false;
  return (
    <div className="app">
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home authToken={authToken}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/onboard' element={<Onboard/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
