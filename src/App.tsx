import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Mobile from './Mo_Co';
import Ai from './Ai';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Internet from './Internet';
import About from './About';

function App() {
  useEffect(() => {
    Aos.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
    });
}, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/mo-co" element={<Mobile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/internet" element={<Internet />} />
      </Routes>
    </div>
  );
}

export default App;

