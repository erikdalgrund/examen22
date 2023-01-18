import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { CheckoutSuccess } from "./components/shoppingCart";
import ShopContextProvider from "./components/shoppingCart/context/ShopContextProvider";
import { Home, Indoor, Outdoor, Faq, Login, Tools, ShoppingCart, SingleProduct} from "./pages";



function App() {
  return (  
    <ShopContextProvider>
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
                      <Route path="/cart" element={<ShoppingCart/>} />
                      <Route path="checkout-success" element={<CheckoutSuccess/>} />
                      <Route path="/products/:id" element={<SingleProduct/>} />
                </Routes>
              </div>
            <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  )
}

export default App;
