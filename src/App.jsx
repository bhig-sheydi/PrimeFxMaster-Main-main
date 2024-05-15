// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './Components/Home';
import Faqs from './Components/Faqs';
import HowItWorks from './Components/HowItWorks';
import About from './Components/About';
import Nav from './Components/Nav/Nav';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { MyContextProvider, useMyContext } from './Components/Mycontext';
import { auth } from './config/firebase';

function App() {
  return (
    <MyContextProvider>
      <AppContent />
    </MyContextProvider>
  );
}

function AppContent() {
  const { isNavbarVisible } = useMyContext(); // Use the context to access isNavbarVisible

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <BrowserRouter>
        {isNavbarVisible && <Nav scrollToSection={scrollToSection} />} {/* Show navbar based on the state */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/workings' element={<HowItWorks />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
