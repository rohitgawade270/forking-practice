import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo';
import Contact from './pages/Contact';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/contact' element={<Contact />} />
       </Routes>

      </Router>


    </>
  );
}

export default App;
