import React, { useState} from "react";
import { Header, Footer, Carousel } from './components/common';
import { content } from './components/common/carousel/content';
function App() {
  return (
  <div className='App'>
    <Header />
    <Carousel images={ content }/>
    <Footer />
  </div>
  )
}

export default App;
