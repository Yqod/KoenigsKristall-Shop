import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/header.jsx";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import About from "./Components/About.jsx";
import Info from "./Components/Info.jsx";
import ShoppingCart from "./Components/shoppingCart.jsx";


export default function App() {
  const [cartItems, setCartItems] = useState([]);

  
  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" 
         element={
      <>
        <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        <Shop onAddToCart={handleAddToCart} />
      </>
    }
  />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
   
    </Router>
  );
}
