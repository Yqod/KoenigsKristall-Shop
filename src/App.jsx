import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header.jsx";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import About from "./Components/About.jsx";
import Info from "./Components/Info.jsx";
import ShoppingCart from "./Components/shoppingCart.jsx";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setShowCart(true)}
      />

      {/* Warenkorb-Overlay */}
      {showCart && (
        <div className="cartOverlay" onClick={() => setShowCart(false)}>
          <div className="cartModal" onClick={e => e.stopPropagation()}>
            <button
              style={{ float: "right", marginBottom: "10px" }}
              onClick={() => setShowCart(false)}
            >
              Schließen
            </button>
            <ShoppingCart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop onAddToCart={handleAddToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}