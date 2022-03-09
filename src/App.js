import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects"
import React from 'react'
import './index.css'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='resume' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>)
}

export default App;
