import React, { useState } from "react";
import shopData from "./shopData";

function Shop({ onAddToCart }) {
  // Alle Kategorien extrahieren (einzigartig)
  const categories = Array.from(new Set(shopData.map(item => item.categ)));
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Produkte der gewählten Kategorie filtern
  const filteredProducts = shopData.filter(
    item => item.categ === selectedCategory
  );

  return (
    <div className="shopGrid">
      {!selectedCategory ? (
        // Kategorien-Übersicht
        categories.map((cat) => (
  <div
    key={cat}
    className="categoryCard"
    onClick={() => setSelectedCategory(cat)}
    data-category={cat}
  >
    <span>{cat}</span>
  </div>
))
      
      ) : (
        // Produkt-Übersicht für die gewählte Kategorie
        <>
          <button className="backButton" onClick={() => setSelectedCategory(null)}>
            ← Zurück zu den Kategorien
          </button>
          {filteredProducts.map((item) => (
            <div className="shopCard" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="productImage"
              />
              <div className="CardContent">
                <h2 className="productTitle">{item.title}</h2>
                <p className="productDescription">{item.description}</p>
                <p className="productPrice">{item.price} €</p>
                <button onClick={() => onAddToCart?.(item)} className="addToCartButton">
                  In den Warenkorb
                </button>
              </div>
            </div>
            
          ))}
        </>
      )}
    </div>
  );
}

export default Shop;