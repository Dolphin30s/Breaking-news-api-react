import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Episodes from './Pages/Episodes/Episodes';
import Episode from './Pages/Episode/Episode'
import Character from './Pages/Character/Character';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//css
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Episodes />} />
          <Route path="episode/:episodeId" element={<Episode />} />
          <Route path="character/:characterName" element={<Character />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
