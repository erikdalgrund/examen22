import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { Home, Indoor, Outdoor, Faq, Login, Tools } from "./pages";



function App() {
  return (  
    <Router>
      <div className="App">
          <Header />
            <div className="routes">
              <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/indoor" element={<Indoor/>} />
                    <Route path="/outdoor" element={<Outdoor/>} />
                    <Route path="/faq" element={<Faq/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/tools" element={<Tools/>} />
              </Routes>
            </div>
          <Footer />
      </div>
    </Router>
  )
}

export default App;
