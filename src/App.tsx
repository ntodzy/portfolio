import {Outlet, Link} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/home';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>

      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </>
  );
}

export default App;

function NoMatch() {
  return (
    <div className="App">
      <div className="centered" style={{fontSize: "5vh", color:"wheat"}}>404 Not Found</div>
    </div>
  )
}