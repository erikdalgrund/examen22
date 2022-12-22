import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { Home } from "./pages";



function App() {
  return (  
    <Router>
      <div className="App">
          <Header />
            <div>
              <Routes>
                    <Route path="/" element={<Home/>} />
              </Routes>
            </div>
          <Footer />
      </div>
    </Router>
  )
}

export default App;
