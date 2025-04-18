import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Menu from './component/Menu';

function App() {
  return (
    <div>
      <Menu /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      {/* <Home/> */}
      {/* <About/> */}
    </div>
  );
}

export default App;
