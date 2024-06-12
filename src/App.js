import logo from './logo.svg';
import './App.css';
import Addcourse from './components/Addcourse';
import Viewall from './components/Viewall';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Addcourse/>}/>
        <Route path='/SearchStudent'element={<SearchStudent/>}/>
        <Route path='/Viewall'element={<Viewall/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
