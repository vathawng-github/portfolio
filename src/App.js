import React from "react";

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<><Navbar /><Intro /></>}></Route>
        <Route path = "/Projects" element={<><Navbar /><Projects /></>}></Route>
        <Route path = "/About" element={<><Navbar /><About /></>}></Route>
        <Route path = "/Contact" element={<><Navbar /><Contact /></>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
