import React from "react";
import shopData from "./shopData";

function Shop({ onAddToCart }) {
  return (
    <div className="shopGrid">
      {shopData.map((item) => (
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
    </div>
  );
}

export default Shop;